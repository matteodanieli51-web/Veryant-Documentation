## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Entry-Field control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

Example - Define an entry-field with width in cells

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 22.2
     lines 12.3 cells
     id 21
     3-d
     width-in-cells
     .
```
