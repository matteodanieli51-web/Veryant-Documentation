## Centered-Headings

When this style is set, the content of the column headings is centered. Otherwise, the heading of each column is the same as the column itself.

This style has effect only in conjunction with the [Table-View](./Table-View) style.

**Example** - Define a tree table view with 3 columns and column headings:

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
     cenered-headings
     display-columns (1, 10, 15)
     .
```
