## Cells-Selected

This property allows you to retrieve the list of selected cells when [Selection-Mode](./Selection-Mode) includes *grsm-cell-selection*.

The list of cells is returned in the format: row1,col1 row2,col2 ... rowN,colN.

**Example** - Retrieve the list of selected cells and show it to the user

```cobol
working-storage section.
77 selected-cells-list pic x any length.

procedure division.
...
  inquire screen1-gr-1 cells-selected selected-cells-list.
  display message selected-cells-list.
...
```
