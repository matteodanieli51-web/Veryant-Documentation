### PROPERTY and Property-Name Clauses

#### General format

```cobol
{ property-name          } {IS } { prop-option [GIVING result-1] }... 
{ PROPERTY property-type } {ARE} 
```

Where prop-option is one of the following:

```cobol
{ property-value [ LENGTH {IS} length-1 ] } 
{                         {= }            } 
{                                         ) 
{ ( {property-value} ... )                } 
{                                         } 
{ { MULTIPLE } property-table             } 
  { { TABLE    }           } 
```

#### General rules

1. The PROPERTY clause assigns a value to one of a control's special properties or invokes a control-specific method. The PROPERTY clause takes the types of only special properties and methods for controls. Each type of control has its own set of special properties and methods. These are described in the sections documenting each control type at [Controls Reference](../../../User-Interface/Controls-Reference/Controls-Reference). *Property-type* specifies which special property to modify (each of a control's special properties is uniquely identified by a number). *Property-value* is the value to assign to that special property. *Property-value* must be a data type that is appropriate for the specified property. If *property-type* specifies a special property that does not exist, it is ignored for most control types.
2. *Property-name* provides an alternate method for identifying which special property to modify. The compiler knows the names of the special properties that belong to each control type. In situations where the compiler knows which type of control is being acted upon, you can use the appropriate *property-name* directly instead of using the special property's identifying number in the PROPERTY clause.

For example, the MAX-TEXT special property of entry fields is property number "1". You can set the value of this property to "10" with either

```cobol
PROPERTY 1 = 10
```

or

```cobol
MAX-TEXT = 10
```

The second method can be used only when your code makes it clear to the compiler that you're acting on an Entry-Field.

3. Some properties return specific values when set. These values are placed in result-1 of the GIVING phrase. The meaning of the value depends on the property being set; see the documentation for the specific property. Properties that do not have a pre-defined return value set result-1 to "1" if the property was set successfully, or "0" if not. When a property is being given multiple values in a single assignment (for example: "Display-Columns = (1, 10, 30)"), then result-1 is set in response to the last value assigned.
4. When multiple special property assignments are made in a single statement, those assignments are performed in the order listed in the statement.
5. If more than one *property-value* is specified, each one is applied to the property in the order listed. This is normally used for cumulative properties. These are properties that perform some special action each time they have a value assigned to them. For example, you can set three columns in a list box with "DISPLAY-COLUMNS = (1, 20, 35 )". In the case of the DISPLAY-COLUMNS property, each time it is assigned a value, it sets a new column location. Note that the parentheses are required.
6. When you specify *property-table*, then each element of the table is assigned to the property. The elements are assigned in ascending occurrence order. For example, the following code fragment fills a Combo-Box with the names of three colors:

```cobol
...
01  COLOR-NAMES. 
    03  PIC X(10) VALUE "Red". 
    03  PIC X(10) VALUE "Green". 
    03  PIC X(10) VALUE "Blue". 
01  COLOR-TBL REDEFINES COLOR-NAMES 
    OCCURS 3 TIMES 
    PIC X(10). 
...
PROCEDURE DIVISION. 
...
    DISPLAY COMBO-BOX, SIZE 10, LINES 3, 
            ITEM-TO-ADD = TABLE COLOR-TBL. 
```

**Note** - The current size of the table is used, so you can use OCCURS DEPENDING ON tables when you want to have a variable number of items in a table.

7. You should use caution when specifying property tables in the Screen Section, because each DISPLAY statement of a Screen Section item reloads all of that item's properties into the control. This can be inefficient if the property table is large, and it can cause duplicate entries if you are not careful. To avoid this, you can create your controls in the Screen Section, but use the MODIFY statement to set any table-oriented properties at the appropriate point in your program. In this way, the tables are not referenced in the Screen Section and a DISPLAY will not cause those tables to be reprocessed.
8. When the LENGTH option is specified, *length-1* establishes the exact size of *property-value*. The text value presented to the control must not contain trailing spaces or have trailing spaces added. When you specify the LENGTH option, the control uses exactly the number of characters of *length-1*. However, if *length-1* is a value larger than the size of the data item it is modifying, the size of the data item is used instead. If *length-1* is negative, it is ignored and the default handling occurs.
