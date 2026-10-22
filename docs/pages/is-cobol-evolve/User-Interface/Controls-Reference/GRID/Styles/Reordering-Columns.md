## Reordering-Columns

When this style is set, the user can change the order of the columns simply by dragging a column to its new position. No additional programming is needed because only the appearance is affected and the program still receives column information as if they were in their original positions.

Refer to the [Reordering-Col-Index](../Properties/Reordering-Col-Index) property for programmatically set or retrieve columns order.

**Example** - Define a grid with reordering-columns style

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
