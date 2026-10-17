## Reordering-Columns

When this style is set, the user can change the order of the columns simply by dragging a column to its new position. No additional programming is needed because only the appearance is affected and the program still receives column information as if they were in their original positions.

This style has effect only in conjunction with the [Table-View](./Table-View) style.

It’s not possible to move the first column.

**Example** - Define a tree table view with 3 reordable columns

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     height-in-cells
     color 144
     id 2
     table-view
     column-headings
     tiled-headings
     reordering-columns
     cenered-headings
     display-columns (1, 10, 15)
     .
```
