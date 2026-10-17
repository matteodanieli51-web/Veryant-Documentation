## INQUIRE

### Format 1

```cobol
INQUIRE {Control-Item       } [ ( {Index-1} ... ) ]
        {CONTROL AT Location}
 
  { { Property-Name          } [IN] { [MULTIPLE] Property-Value [ LENGTH {IN} Length-1 ] } } ...
    { PROPERTY Property-Type }      { [TABLE   ]                         {= }            } 
  
  { CLASS [IN] Control-Class  }
  { HANDLE [IN] Control-Handle}
  { STATUS [IN] Control-Status}
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

### Format 2

```cobol
INQUIRE { window-handle           } { Property-Name          [IN] Property-Value }
        { WINDOW [generic-handle] } { STATUS                 [IN] Control-Status }

```

### Syntax rules

1. CELL and CELLS, PIXEL and PIXELS and . COLUMN, COL, POSITION and POS are synonymous.
2. Control-item is defined as USAGE HANDLE and identifies the control being inquired.
3. Index-1 is numeric and defined as numeric, with parenthesis as when referencing a table index.
4. The AT, LINE, COLUMN, CLINE, and CCOL phrases must be used if the CONTROL phrase is specified.
5. Screen-loc is an integer data item or literal.
6. Line-num, col-num, are numeric data items or literals.
7. Property-name is the name of a property specific to the type of control being inquired. Refer to [Graphical Control List](\) for the list of properties supported by a specific control type. If control-item refers to a generic handle, or if the CONTROL option is specified, then property-name cannot be used. Use the PROPERTY phrase instead.
8. Property-type is a numeric literal or data item. Possible values are listed in the [iscontrols.def](\) copybook.
9. Property-value is a data item.
10. Length-1 is a numeric data item. The LENGTH phrase may be specified only if the value or property-value immediately preceding it is an alphanumeric data item.
11. Control-Class is an alphanumeric data item.
12. Control-Handle is a USAGE HANDLE data item.
13. Control-Status is a numeric data item.

### General rules

1. The INQUIRE statement retrieves some or all of a control's current properties, and stores them as data items. *Control-item* identifies the control to inquire. If the CONTROL phrase is used instead, the runtime inquires the control located at the screen position specified by the AT, LINE, and COLUMN phrases in the current window. A list of controls is maintained for each window. This list is kept in the order that controls are created.
2. If *control-item* does not refer to a valid control, or if the runtime cannot locate a control at the specified screen location, the INQUIRE statement returns the “Invalid Handle” error or has no effect if iscobol.ignore_invalid_handle is set to true.
3. If index-1 is specified, the properties described below are modified to match the value of index-1. This happens before the inquiry executes. The Control properties updated are shown below:

| Control Type | Properties Affected |
| --- | --- |
| List Box | QUERY-INDEX |
| Grid | Y, X |
| Tree View | ITEM |

Each occurrence of index-1 modifies one property.

4. The LENGTH option, length-1 returns the exact number of characters placed by the control in value or property-value.
5. The LINE NUMBER IN and COLUMN NUMBER IN phrases return the location of the control in line-num and col-num respectively. The SIZE IN and LINES IN phrases return the dimensions of the control in width and height respectively. Use LINE and SIZE dimension values twhen creating the CONTROL in order to have their updated values returned with INQUIRY.
6. The CLASS clause returns the control type. Possible values, defined in [iscontrols.def](\), are

| Value | Control type |
| --- | --- |
| 1 | Label |
| 2 | Entry-Field |
| 3 | Push-Button |
| 4 | Check-Box |
| 5 | Radio-Button |
| 6 | Scroll-Bar |
| 7 | List-Box |
| 8 | Combo-Box |
| 9 | Frame |
| 10 | Tab-Control |
| 11 | Bar |
| 12 | Grid |
| 13 | Bitmap |
| 14 | Tree-View |
| 15 | Web-Browser |
| 17 | Status-Bar |
| 18 | Date-Entry |
| 21 | Slider |
| 22 | Java-Bean |
| 23 | Ribbon |
| 24 | Scroll-Pane |

7. The HANDLE clause returns the control handle.
8. The STATUS clause returns a numeric value that describes the status of the control or the window. Possible values are:

| STATUS | Meaning |
| --- | --- |
| 0 | the handle is valid, the control or window is currently on video |
| 1 | the handle is not valid |
| 2 | the control or window isn't yet created or has been destroyed by destroy verb |
| 3 | the control or window has been destroyed internally by the framework (like it happens with temporary controls, for example) and not by a destroy verb |

### Examples

Format 1 - Get the value from a entry-field to a variable

```cobol
inquire scr-cust-code value ws-cust-code
```

Format 1 - Get the class that a generic handle points to; if it’s an entry-field, then get the max-text value.

```cobol
working-storage section.
copy "iscontrols.def".
77 generic-handle handle.
77 ctl-class pic 9(5).
77 wrk-mt    pic 9(5).
...
procedure division.
...
inquire generic-handle class in ctl-class.
if ctl-class = ctl-entry-field 
   inquire generic-handle property efp-max-text in ws-max-text
end-if.
```

Format 2 - Get the size in columns and lines of a graphical window

```cobol
inquire mywin-handle size ws-win-size
                     lines ws-win-lines
```
