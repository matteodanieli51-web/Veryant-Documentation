## Columns-Selected

This property allows you to set or retrieve the list of selected columns when [Selection-Mode](./Selection-Mode) includes *grsm-column-selection*.

The list of columns is specified in the format: column1 column2 ... columnN.

**Example** - Retrieve the list of selected columns and show it to the user

```cobol
working-storage section.
77 selected-cols-list pic x any length.

procedure division.
...
  inquire screen1-gr-1 columns-selected selected-cols-list.
  display message selected-cols-list.
...
```
