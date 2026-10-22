## Display-Columns

This property can be used to set the starting position of each column in the a tree-view with [Table-View](../Styles/Table-View) style. As a consequence, it defines the number of columns. The width of each column depends on the starting position of the next column. The width of the last column can be defined with the [Virtual-Width](./Virtual-Width) property. A column cannot be larger than the tree-view width, so the tree-view [Size](./Size) specifies also the maximum size of a column.

Since this property must be set for each column, a list of values is needed in order to determine the starting position of each column.

Setting this property to 0 resets the list.

When a single value greater than zero is set, it is appended to the list. This is useful to define a user-defined appearance. The snippet below defines three columns, 10 characters wide. The first column always starts at 1:

```cobol
modify my_tv, display-columns = 1
modify my_tv, display-columns = 11
modify my_tv, display-columns = 21
modify my_tv, virtual-width = 30
```

When values are enclosed between parentheses, a new list is defined at once. This is the typical syntax used in the Screen Section definition of a tree-view. The snippet below defines three columns, 10 characters wide. The first column always starts at 1.

```cobol
display-columns = (1, 11, 21)
virtual-width = 30
```

**Example** - Define a tree table to host a group data item

```cobol
       WORKING-STORAGE SECTION.
       ...
       01  Tree-Data.
           03 Entry-Value pic x(20).
           03 Detail-1    pic x(30).
           03 Detail-2    pic x(50).
       ...
       SCREEN SECTION.
       ...
          03 screen-1-tv-1 tree-view table-view
             line 2, col 2, lines 10, size 50 cells
             column-headings, tiled-headings
             display-columns (1, 15, 30), virtual-width 60
             data-columns (record-position of Entry-Value,
                           record-position of Detail-1,
                           record-position of Detail-2).
       ...
```
