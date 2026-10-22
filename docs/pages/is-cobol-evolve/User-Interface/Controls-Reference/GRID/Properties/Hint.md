## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Grid control.

**Example** - Define a grid with hint text

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     font Calibri-10v0
     help-id 5040
     id 1
     hint "Grid Hint Information"
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     row-dividers 1
     end-color 9
     num-rows 5
     .
...
```
