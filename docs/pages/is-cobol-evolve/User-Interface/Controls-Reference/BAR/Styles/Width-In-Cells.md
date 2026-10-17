## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Bar control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example -** Define an horizontal bar on screen section with size 46.0 expressed in cells

```cobol
screen section.
...
  03 screen-1-br-2 Bar
     line 5.0
     column 12.0
     size 46.0
     id 2
     width-in-cells
     .
```
