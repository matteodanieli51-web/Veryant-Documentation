## Width-In-Cells

This style implies that the value specified for the [Size](../../CHECK-BOX/Properties/Size) property, the one setting the Chips-Box control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../../CHECK-BOX/Properties/Size) *value* CELLS".

**Example -** Define a chips-box with width in cells

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 27.0
     column 10.0
     size 11.0
     lines 30
     id 11
     width-in-cells
     .
```
