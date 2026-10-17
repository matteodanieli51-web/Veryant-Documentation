## Rows-Selected

This property allows you to set or retrieve the list of selected rows when the [Selection-Mode](./Selection-Mode) is set to a value greater than zero.

The list of rows is expressed in the format: row1 row2 ... rowN.

**Example** - Retrieve the list of selected rows and show it to the user

```cobol
working-storage section.
77 selected-rows-list pic x any length.

procedure division.
...
  inquire screen1-lbc-1 rows-selected selected-rows-list.
  display message selected-rows-list.
...
```
