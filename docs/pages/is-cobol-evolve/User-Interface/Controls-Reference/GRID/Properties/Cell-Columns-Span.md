## Cell-Columns-Span

This property allows you to group several cells on the x-axis in the column heading.

The value of this property specifies how many cells should be merged together on the x-axis starting from the column identified by the [X](./X) property in the row identified by the [Y](./Y) property. The row must be part of the column heading.

Reference the first of the merged columns to inquire or modify the content of the merged cells.

If the span you generate includes cells that are not part of the heading, these cells will not be included in the span.

Columns whose heading includes a span can’t be sorted, filtered or moved. The [Filterable-Columns](../Styles/Filterable-Columns) style, the -[Reordering-Columns](../Styles/Reordering-Columns) style, the [Sortable-Columns](../Styles/Sortable-Columns) style and the [Sort-Types](./Sort-Types) property have no effect on these columns.

**Example** - In a grid where the first three rows are column headings, merge column number 2 and 3 within the second row and put the title "Col.2" into the merged cells

```cobol
procedure division.
...
  modify screen-1-gr-1(2, 2) cell-columns-span 2
  modify screen-1-gr-1(2, 2) cell-data "Col.2"
...
```
