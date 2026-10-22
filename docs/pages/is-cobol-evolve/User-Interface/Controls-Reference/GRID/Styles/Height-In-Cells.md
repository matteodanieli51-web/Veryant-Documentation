## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Grid control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a grid with height and width in cells

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     height-in-cells
     width-in-cells
     line 5.7
     column 3.1
     size 34.6
     lines 15.5
     id 1
     event procedure screen-1-gr-1-evt-proc
     boxed
     centered-headings
     column-headings
     adjustable-rows
     adjustable-columns
     hscroll
     reordering-columns
     lm-on-columns 1
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     heading-font Calibri-10v0
     cursor-frame-width 3
     num-col-headings 1
     num-rows 5
     .
```
