## Rows-Selected

This property allows you to set or retrieve the list of selected rows when [Selection-Mode](./Selection-Mode) includes *grsm-row-selection*.

The list of rows is expressed in the format: row1 row2 ... rowN.

Setting this property to "ALL" (case insensitive), all the rows are selected.

**Example** - Retrieve the list of selected rows and show it to the user

```cobol
working-storage section.
77 selected-rows-list pic x any length.

procedure division.
...
  inquire screen1-gr-1 rows-selected selected-rows-list.
  display message selected-rows-list.
...
```
