## Sortable-Columns

When this style is set, tree-view columns become sortable. When the user clicks a column heading, the tree-view content is sorted by that column. No additional programming is needed because only the appearance is affected and the program still receives columns' information as if they were in their original positions.

The icons displayed on the heading can be customized by providing custom PNG files as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

The sort logic depends on the [Sort-Types](../Properties/Sort-Types) property.

This style has effect only in conjunction with the [Table-View](./Table-View) style.

**Example** - Define a tree table view with 3 sortable columns

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
     sortable-columns
     sort-types ("X", "X", "X")
     cenered-headings
     display-columns (1, 10, 15)
     .
```
