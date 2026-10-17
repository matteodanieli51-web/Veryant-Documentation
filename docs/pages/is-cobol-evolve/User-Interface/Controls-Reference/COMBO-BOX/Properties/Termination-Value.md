## Termination-Value

If this property is set to a numeric value different from "0" and the [Notify-Selchange](../Styles/Notify-Selchange) style is set, a termination condition for the active screen is generated when the value of the Combo-Box control is modified.

**Example -** Define a combo-box in screen section that produces a termination value when an item is selected

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
     termination-value 5030
     .
```
