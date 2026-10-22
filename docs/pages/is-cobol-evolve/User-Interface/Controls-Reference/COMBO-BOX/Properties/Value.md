## Value

This property represents the value of the Combo-Box control.

When inquired, it returns the value that is currently represented.

When set, the Combo-Box control changes its look to represent it.

When set in a Drop-List Combo-Box, the currently selected item is changed in order to match the value set. If set to an invalid value (a value that is not listed inside the control), then the Combo-Box control appears empty.

**Example -** Define a combo-box with its default value

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     notify-selchange
     3-d
     drop-down
     value "Item1"
     termination-value 5030
     .
```
