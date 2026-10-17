## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Tree-View control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a tree-view with height in cells

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1
     height-in-cells
     color 144
     id 2
     .
```
