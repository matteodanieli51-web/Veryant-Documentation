## Sort-Types

This property specifies the sorting property of the columns of a tree-view with both [Table-View](../Styles/Table-View) and [Sortable-Columns](../Styles/Sortable-Columns) styles. Multiple values can be specified enclosed between parentheses. Values are applied to cells, starting from the first. Sort types are represented by single characters.

The icons displayed on the heading can be customized by providing custom GIF files as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

Valid values are:

|  |  |
| --- | --- |
| - | Not sortable. This is the default. |
| X | Alphanumeric sorting, case-insensitive |
| U, L | Alphanumeric sorting, case-sensitive |
| 9 | Numeric sorting, leading sign and current decimal-point used, all other non-digit characters ignored |
| D, E | Date sorting. Assumes three integer fields separated by one or more non-digit characters. Integers are year, month and day. Two-digit years less than 30 are treated as year 20xx while other two-digit years are treated as year 19xx.<br>The default ordering of the fields is month, day, year if the current decimal point character is a point or period (.), otherwise the default ordering is day, month, year. You can explicitly specify the ordering by appending a three-character string enclosed by parenthesis, using Y, M and D to represent the year, month and day respectively. For example, D(DMY) is date order, with the date being in day-month-year order.<br>Only MDY, DMY and YMD are currently valid. Invalid format strings have undefined results. |

**Example** - define a tree table with three columns that can be sorted with alphanumeric sort

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
