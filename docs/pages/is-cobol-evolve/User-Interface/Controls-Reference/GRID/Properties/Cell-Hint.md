## Cell-Hint

This property allows you to set or retrieve the hint text of the cell identified by the [X](./X) and [Y](./Y) properties. Grid headings can host at best, one hint per column.

**Example** - Set the hint text of a cell

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2 cell-hint "Cell containing name"
...
```
