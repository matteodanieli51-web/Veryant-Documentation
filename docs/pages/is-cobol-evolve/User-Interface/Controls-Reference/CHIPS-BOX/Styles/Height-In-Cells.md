## Height-In-Cells

This style implies that the value specified for the [Lines](../../COMBO-BOX/Properties/Lines) property, the one setting the Chips-Box control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../../COMBO-BOX/Properties/Lines) *value* CELLS".

**Example -** Define a chips-box in screen section with height in cells

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     height-in-cells
     .
```
