## Sortable-Columns

When this style is set, grid columns become sortable. When the user clicks a column heading, the grid content is sorted by that column. Hold [Ctrl] to sort by multiple columns. No additional programming is needed because only the appearance is affected and the program still receives columns' information as if they were in their original positions.

The icons displayed on the heading can be customized by providing custom PNG files as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

The empty row produced by setting [Num-Rows](../Properties/Num-Rows) to "-1" is not included in the sort and is always placed at the bottom of the grid.

The sort logic depends on the [Data-Types](../Properties/Data-Types) set for the column according to the following associations:

| Data Types | Sort Type |
| --- | --- |
| X<br>U<br>L<br>Z | Alphanumeric sort |
| 9<br>I<br>P | Numeric sort |
| D<br>E | Date/Time sort |

If the [Data-Types](../Properties/Data-Types) is omitted, then an Alphanumeric sort is performed.

The Date/Time sort is performed according to the datetime format string. See [Data-Types for date and time](../Properties/Data-Types) for details. When the format string includes words (e.g. the day or the month in the date are expressed with words) these words are searched in the US locale for type "D" and in the current locale for type "E", if they’re not found, then the result of the sort is unpredictable.

This style makes all the columns sortable. If you wish to have only some columns sortable, you should consider to use [Sort-Types](../Properties/Sort-Types) instead.

This style is overridden by the [Sort-Types](../Properties/Sort-Types) property. If both are set, the runtime behaves as if only [Sort-Types](../Properties/Sort-Types) was set.

**Example** - Define a grid with sortable-columns

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
     row-headings
     lm-on-columns 1
     sortable-columns
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     heading-font Calibri-10v0
     cursor-frame-width 3
     num-col-headings 1
     num-rows 5
     .
```
