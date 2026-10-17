## Reset-Grid

When set to 1, the Grid control is completely emptied.

Cells data (visible and hidden), bitmaps and colors are cleared.

If a search panel is present on top of the Grid’s heading, it is either cleared or removed depending on the value of the [Search-Panel](./Search-Panel) property.

When set to 2, the Grid control is emptied except for the headings. If row headings are present, the Grid cells are emptied but not physically removed from the control.

When set to 3, the Grid control is emptied except for the column headings. Row headings, if present, are removed.

**Example** - Modify a grid to reset all its rows but the column heading rows

```cobol
procedure division.
...
  modify screen-1-gr-1 reset-grid 3
...
```
