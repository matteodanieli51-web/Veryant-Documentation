## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Entry-Field control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define an entry-field control with height in cells style

```cobol
screen section.
...
  03 screen-1-ef-5 Entry-Field
     line 50.1
     column 19.9
     size 10.7 cells
     lines 3.0
     id 23
     3-d
     height-in-cells
     .
```
