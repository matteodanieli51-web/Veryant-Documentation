## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Tree-View control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example** - Define a tree-view with width-in-cells

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8
     lines 29.1 cells
     height-in-cells
     color 144
     id 2
     show-sel-always
     show-lines
     width-in-cells
     .
```
