## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Label control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example** - Define a label with height and width in cells

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5
     lines 3.2
     id 25
     center
     title "This is the main Title"
     height-in-cells
     width-in-cells
     .
```
