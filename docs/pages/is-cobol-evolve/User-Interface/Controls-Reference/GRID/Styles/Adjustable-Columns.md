## Adjustable-Columns

When this style is set, the user can change the column width by dragging the column divider with the mouse. Either the [Column-Headings](./Column-Headings) style or the [Num-Col-Headings](../Properties/Num-Col-Headings) property must be set. When the width of a column is changed by the user, the [MSG-COL-WIDTH-CHANGED](../Events/MSG-COL-WIDTH-CHANGED) event is fired.

The minimum column size is 1. The maximum is the visible portion of the grid. If the grid allows for horizontal scrolling, then the [Virtual-Width](../Properties/Virtual-Width) property changes as the user changes column sizes.

**Example** - Define a grid with adjustable columns

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     help-id 5040
     id 1
     event procedure screen-1-gr-1-evt-proc
     boxed
     column-headings
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
