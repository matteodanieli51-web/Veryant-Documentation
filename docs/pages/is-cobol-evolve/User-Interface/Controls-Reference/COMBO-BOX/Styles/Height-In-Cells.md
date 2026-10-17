## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Combo-Box control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example -** Define a combo-box in screen section with height in cells

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     3-d
     drop-down
     height-in-cells
     .
```
