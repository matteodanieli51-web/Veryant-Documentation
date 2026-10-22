## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Tab-Control control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example** - Define a tab-control with width-in-cells style

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6
     lines 28.9
     help-id 1036
     id 10
     width-in-cells
     height-in-cells
     .
```
