## MODIFY

#### Format 1

```cobol
MODIFY {Control-Item       } [ ( {Index-1} ... ) ]
       {CONTROL AT Location}
 
  { { Property-Name          } [IS ] { [MULTIPLE] Property-Value [ LENGTH {IS} Length-1 ] [GIVING Result-1] } } ...
 
    { PROPERTY Property-Type } [{ ARE }] { [TABLE   ]
                                {  =  }
  { [NOT] Style-Name } ...
```

Location is defined as follows:

```cobol
{ Screen-Loc [CELL  ]
             [CELLS ]
             [PIXEL ]
             [PIXELS]
 
 
  LINE NUMBER Line-Num [CELL  ]
                       [CELLS ]
                       [PIXEL ]
                       [PIXELS]
 
  {COLUMN  } NUMBER Col-Num [CELL  ]
  {COL     }                [CELLS ]
  {POSITION}                [PIXEL ]
  {POS     }                [PIXELS]
 
  }
```

#### Format 2

```cobol
MODIFY {Window-Handle           } 
       {WINDOW [Generic-Handle] }
 
  { Property-Name [IS ] Property-Value }
  {               [=  ]                } ...
 
  [ ON EXCEPTION Statement-1]
 
  [ NOT ON EXCEPTION Statement-2 ]
 
  [END-MODIFY]
```

### Syntax rules

1. CELL and CELLS are synonymous.
2. PIXEL and PIXELS are synonymous.
3. COLUMN, COL, POSITION and POS are synonymous.
4. *Control-item* is a USAGE HANDLE data item or elementary Screen Section item that describes a control.
5. *Index-1* is a numeric expression. The parentheses surrounding *index-1* are required.
6. *Window-handle* is a USAGE HANDLE OF WINDOW or PIC X(10) data item.
7. *Generic-handle* is a USAGE HANDLE, HANDLE OF WINDOW or PIC X(10) data item.
8. *Screen-loc* is an integer data item or literal that contains exactly 4, 6, or 8 digits, or a group item of 4, 6, or 8 characters.
9. *Line-num*, *col-num* are numeric data items or literals. They can be non-integer values, except when pixels are specified.
10. *Length-1* is a numeric literal or data item. The LENGTH phrase may be specified only if the *value* or *property-value* immediately preceding it is an alphanumeric literal or data item, and not a figurative constant. In addition, the MULTIPLE option may not be specified along with the LENGTH phrase.
11. *Property-name* is the name of a property specific to the type of control being referenced. If the type of control is unknown to the compiler (as in a "DISPLAY OBJECT *object-1*" statement), then *property-name* may not be used. You must use the PROPERTY *property-type* option instead.
12. *Property-type* is a numeric literal or data item. It identifies the property to modify. The numeric values that identify the various control properties can be found in the COPY library "iscontrols.def".
13. *Property-value* is a literal or data item. In the Procedure Division, *property-value* may also be a numeric expression (however, only the first *property-value* in a phrase may be an expression, subsequent values must be literals or data items). Note that the parentheses are required.

### General rules

#### Format 1

1. A Format 1 MODIFY statement updates an existing control. *Control-item* should contain a handle returned by a DISPLAY *Control-Type* statement, or the name of an elementary Screen Section control item. If *control-item* does not refer to a valid control, the MODIFY statement returns the “Invalid Handle” error or has no effect if iscobol.ignore_invalid_handle is set to true. Note that controls referenced in the Screen Section are not valid until they have been created via a DISPLAY statement. If *control-item* refers to a valid control, the effect of the statement is to update the specified properties of the control and to redisplay it.
2. If *index-1* is specified, then certain properties in the control being modified are changed to match the value of *index-1*. This occurs before any modification occurs. The exact set of properties changed by the *index-1* depends on the control's type. Currently, two controls have properties that are changed in this way:

| Control Type | Properties Affected |
| --- | --- |
| List Box | QUERY-INDEX |
| Grid | Y, X |

Each occurrence of *index-1* changes one property. The first occurrence changes the first property in the list presented in the preceding table. The second occurrence changes the second property.

Supplying more index values than the control supports has no additional effect. You may omit trailing indexes; this leaves the corresponding properties unchanged.

This feature can be used to simplify modification of specific elements of controls that hold multiple values. For example, you can modify the contents of row 2, column 3 in a grid with the statement:

MODIFY grid-1(2, 3), CELL-DATA = data-1

This is equivalent to the statements:

MODIFY grid-1, Y = 2, X = 3

MODIFY grid-1, CELL-DATA = data-1

3. MODIFY simply locates the corresponding control and makes the specified modifications. This process does not examine any phrases specified in the Screen Section.

By using the MODIFY verb, you do not need to specify an "item-to-add" property in the Screen Section

4. If the CONTROL phrase is used, the runtime modifies the control located at the screen position specified by the AT, LINE, and COLUMN phrases in the current window. A list of controls is maintained for each window. When attempting to modify a control at a specific location, the runtime searches this list, using the first control it finds that exactly matches the location. The list is maintained in the order that the controls are created. If the runtime does not find a control at the specified location, then the statement has no effect.

Note that a control cannot be moved with a MODIFY statement if it includes the CONTROL phrase. This is due to the fact that the AT, LINE, and COLUMN phrases are used to find the control instead of specifying its new position. To move a control, use the *control-handle* phrase. The compiler does not know the control-type specific style and property names. To Specify, use their definitions from the “iscontrols.def” COPY library.

5. The *style-name* phrase adds the named style to the control. If the NOT option is used with the *style-name* phrase, the named style is removed from the control instead. When a style is added, any conflicting styles are removed first. For example, if you add the FRAMED style to a button, then the UNFRAMED style is removed first.
6. When the LENGTH option is specified, *length-1* establishes the exact size of the value or *property-value*. The text value presented to the control may have no trailing spaces or may have trailing spaces added. When you specify the LENGTH option, the control uses exactly *length-1* characters of data with or without trailing spaces. However, when *length-1* is a value larger than the size of the data item it is modifying, then the size of the data item is used instead. If *length-1* is negative, it is ignored and the default handling occurs.
7. When properties return specific values, these values are placed in result-1 of the GIVING phrase. If the property does not have a pre-defined return value, result-1 is set to "1" if the property is set successfully, otherwise, *result-1* is set to "0". When a property is being given multiple values in a single assignment, as shown here,

DISPLAY COLUMNS = ( 1, 10, 30 )

then *result-1* is set in response to the last value assigned. In the example above, *result-1* is set to 30. Because the meaning of each value depends on the property being set, you should consult the documentation on the specific property for the exact meaning.

8. The MODIFY verb takes a control's home position (upper left corner), its handle, the name of an elementary Screen Section item, or \`^', as its first parameter. Only the properties of the control that are specified in the MODIFY statement are updated.

#### Format 2

9. A Format 2 MODIFY statement changes one or more attributes of an existing FLOATING or INITIAL WINDOW (not a subwindow). Attributes that are not specifically changed remain unchanged, except when a window is made larger, in which case it may also be repositioned in order to keep it on the screen. *Window-handle* or *generic-handle* identify the window to modify. If the WINDOW phrase is used and *generic-handle* is omitted, the current window is modified.
10. *Statement-1* executes if any part of the operation fails. An exception may be caused by one of the following situations:

A. A window that has no input is activated.

B. An external window error occurs. For example, the window does not exist or cannot be created for some reason.

C. An illegal instruction is used.

11. *Statement-2* executes if the MODIFY statement succeeds.

### Examples

Format 1 - Set the value of an entry-field from a variable

```cobol
move "12345" to ws-cust-code
modify scr-cust-code value ws-cust-code
```

Format 1 - Modify the title of a label from a variable

```cobol
move "Customer Address : " to ws-title
modify scr-cust-label title ws-title
```

Format 2 - Set the size in columns and lines of a graphical window

```cobol
move "Customer Address : " to ws-title
modify scr-cust-label title ws-titles
```
