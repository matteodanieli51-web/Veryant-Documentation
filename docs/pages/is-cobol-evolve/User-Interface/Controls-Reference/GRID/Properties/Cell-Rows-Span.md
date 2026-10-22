## Cell-Rows-Span

This property allows you to group several cells on the y-axis within a single column heading.

The value of this property specifies how many cells should be merged together on the y-axis starting from the row identified by the [Y](./Y) property in the column identified by the [X](./X) property.

Reference the first of the merged rows to inquire or modify the content of the merged cells.

If the span you generate includes cells that are not part of the heading, these cells will not be included in the span.

Columns whose heading includes a span can’t be sorted, filtered or moved. The [Filterable-Columns](../Styles/Filterable-Columns) style, the -[Reordering-Columns](../Styles/Reordering-Columns) style, the [Sortable-Columns](../Styles/Sortable-Columns) style and the [Sort-Types](./Sort-Types) property have no effect on these columns.

**Example** - In a grid where the first three rows are column headings, merge rows number 2 and 3 within the first column and put the title "Col.1" in the merged cells

```cobol
procedure division.
...
  modify screen-1-gr-1(2, 1) cell-rows-span 2
  modify screen-1-gr-1(2, 1) cell-data "Col.1"
...
```
