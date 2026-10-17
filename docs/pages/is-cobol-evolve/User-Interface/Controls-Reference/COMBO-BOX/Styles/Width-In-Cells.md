## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Combo-Box control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example -** Define a combo-box in screen section with its width in cells

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0
     lines 11.0
     id 13
     width-in-cells
     3-d
     drop-down
     .
```
