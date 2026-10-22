## Sort-Types

This property specifies the sorting property of the Grid control columns. Multiple values can be specified enclosed between parentheses. Values are applied to cells, starting from the first. Sort types are represented by single characters.

The icons displayed on the heading can be customized by providing custom GIF files as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

Valid values are:

|  |  |
| --- | --- |
| - | Not sortable. This is the default. |
| X | Alphanumeric sorting, case-insensitive |
| U, L | Alphanumeric sorting, case-sensitive |
| 9 | Numeric sorting, leading sign and current decimal-point used, all other non-digit characters ignored |
| I | Integer sorting, leading sign used, all other non-digit ignored |
| P | Positive integer sorting, all non-digit characters ignored |
| D, E | Date sorting. Assumes three integer fields separated by one or more non-digit characters. Integers are year, month and day. Two-digit years less than 30 are treated as year 20xx while other two-digit years are treated as year 19xx.<br>The default ordering of the fields is month, day, year if the current decimal point character is a point or period (.), otherwise the default ordering is day, month, year. You can explicitly specify the ordering by appending a three-character string enclosed by parenthesis, using Y, M and D to represent the year, month and day respectively. For example, D(DMY) is date order, with the date being in day-month-year order.<br>Only MDY, DMY and YMD are currently valid.<br>Alternatively a Java compliant format string can be specified instead of the three-character string. Refer to [Data-Types for date and time](./Data-Types) for details about this format string. |

Any value other than the ones described above is equivalent of “X” (alphanumeric sorting, case-insensitive).

The default sort ordering is ascending. You may specify the default order as descending by appending a caret (^) to the Sort-Types value. For example “X^” specifies a descending alphanumeric sort. Optional elements may be specified in any order. For example ”D^(MDY)” and “D(MDY)^” both specify a descending date field using the month-day-year ordering.

If you specified a Java compliant date format string and this string includes words (e.g. the day or the month in the date are expressed with words) these words are searched in the US locale for type "D" and in the current locale for type "E", if they’re not found, then the result of the sort is unpredictable.

Ascending/descending order only determines the sort order when the user first clicks on the column. After that, the user can reverse the ordering by clicking again.

Since this setting affects the sort type of every single column, a list of values is needed in order to determine how to sort them.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies that the 1st column uses alphanumeric sort and the 2nd column uses numeric sort. The other columns, if any, will be unsortable .

```cobol
SORT-TYPES = ("X", "9")
```

When set to space or spaces, the list is reset.

When a single value other than space is set, it is appended to the list. This is useful to define a user-defined appearance.

The user requests the sort by clicking on the column header. The [Column-Headings](../Styles/Column-Headings) style must be set in order to be sorted by the user.

The empty row produced by setting [Num-Rows](./Num-Rows) to "-1" is not included in the sort and is always placed at the bottom of the grid.

This property overrides the [Sortable-Columns](../Styles/Sortable-Columns) style. If both are set, the runtime behaves as if only Sort-Types was set.

**Example** - Define a grid where column 1 and 3 are sortable

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
     hscroll
     heading-color 200
     heading-divider-color 12
     cursor-frame-width 3
     display-columns (1, 10, 20, 30)
     sort-types ("X", "-", "X", "-")
     num-rows 5
     .
```
