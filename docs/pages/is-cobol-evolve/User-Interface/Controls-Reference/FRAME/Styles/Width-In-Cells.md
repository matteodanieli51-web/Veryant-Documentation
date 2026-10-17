## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Frame control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example** - Define a frame with height in cells

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3
     lines 27.8 cells
     id 16
     width-in-cells.
```
