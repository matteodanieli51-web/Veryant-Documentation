## Num-Col-Headings

With this numeric property it is possible to establish the number of rows used as column headings when the grid has the [Column-Headings](../Styles/Column-Headings) style.

**Example** - Define a grid with number of column headings

```cobol
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     hscroll
     row-headings
     lm-on-columns 1
     row-dividers 1
     end-color 9
     cursor-frame-width 3
     num-col-headings 2
     num-row-headings 2
     num-rows 5
     .
...
```
