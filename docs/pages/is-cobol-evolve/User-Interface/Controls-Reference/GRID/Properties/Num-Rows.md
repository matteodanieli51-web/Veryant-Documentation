## Num-Rows

This numeric property sets the number of rows the Grid control initially contains.

When set to -1, an empty row is always added at the end of the Grid control.

When the user inserts data in that line, a new empty row is appended. This additional row can be used directly to add more records to the Grid control.

When set to 0, the Grid control contains exactly as many rows as inserted.

When set to a value greater than zero, the Grid control contains that number of rows, no matter how many rows the program tries to add.

**Example** - Define a grid with number of rows

```cobol
screen section.
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
     num-rows 5
     .
...
```
