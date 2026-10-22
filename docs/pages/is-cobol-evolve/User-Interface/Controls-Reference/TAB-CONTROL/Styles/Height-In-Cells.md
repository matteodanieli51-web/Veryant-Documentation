## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Tab-Control control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a tab-control with height in cells

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9
     id 10
     height-in-cells
     .
```
