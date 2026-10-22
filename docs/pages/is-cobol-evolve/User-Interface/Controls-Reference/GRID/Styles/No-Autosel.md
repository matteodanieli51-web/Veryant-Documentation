## No-Autosel

When this style is set, the content of the cells is not automatically highlighted when the cell editing starts and the cursor is placed at the end of the cell text.

**Example** - Define a grid with no-autosel style

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
     boxed
     no-autosel
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
     cursor-frame-width 3
     num-col-headings 1
     num-rows 5
     .
```
