## Data-Columns

This property describes where each column begins in the data added to the tree-view with the [Table-View](../Styles/Table-View) style. The data in a row of the tree-view control can be set or retrieved using either a single alphanumeric or a group variable. This property describes the starting position of the information in that variable for each column, starting at 1. The ending position cannot be directly set, it is the character before the first character of the next column.

For example, suppose we have a three-column tree, with the following headers: Value, Detail_1, Detail_2. The buffer necessary to add data to this grid should be structured in a way similar to this:

```cobol
       01  Tree-Data.
           03 Entry-Value pic x(20).
           03 Detail-1    pic x(30).
           03 Detail-2    pic x(50).
```

The values for DATA-COLUMNS are the offsets of Entry-Value, Detail-1 and Detail-2, so 1, 21 and 51.

Since this property must be set for each column, a list of values is needed in order to determine the starting position of each column.

Setting this property to 0 resets the list.

When a single value greater than zero is set, it is appended to the list. This is useful to define a user-defined appearance. The snippet below defines how to distribute Tree-Data fields into three columns of the tree-view. The first column always starts at 1:

```cobol
modify my_tv, data-columns = 1
modify my_tv, data-columns = 21
modify my_tv, data-columns = 51
```

When values are enclosed between parentheses, a new list is defined at once. This is the typical syntax used in the Screen Section definition of a Grid. The snippet below defines how to distribute Grid-Data fields into three columns of the Grid. The first column always starts at 1.

```cobol
data-columns = (1, 21, 51)
```

Instead of hard-coded values, it is possible to use the RECORD-POSITION syntax:

```cobol
data-columns = (record-position of Entry-Value,
                record-position of Detail-1,
                record-position of Detail-2)
```

This syntax avoids problems due to the modification of the item size in the buffer.

When using standard alphanumeric items, the offset of data columns is calculated in bytes, not in digits, so you should pay attention if you’re using a variable length encoding (e.g. UTF-8) to store data in the item value buffer.

When using national items, you can’t take advantage of the RECORD-POSITION syntax. You need to use values calculated on the items length in digits, For example, for the following group item:

```cobol
       01  Tree-Data usage-group national.
           03 Entry-Value pic n(20).
           03 Detail-1    pic n(30).
           03 Detail-2    pic n(50).
```

the correct DATA-COLUMNS setting is:

```cobol
data-columns = (1, 21, 51)
```

and not (1, 41, 101) as RECORD-POSITION would return.

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
