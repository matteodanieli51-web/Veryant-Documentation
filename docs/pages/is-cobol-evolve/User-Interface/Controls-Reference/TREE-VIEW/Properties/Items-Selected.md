## Items-Selected

This property allows you to set or retrieve the list of selected rows when [Selection-Mode](./Selection-Mode) is set either to tvsm-single-interval-selection or to tvsm-multiple-interval-selection

The list of rows is expressed in the format: item1 item2 ... itemN.

Setting this property to "ALL" (case insensitive), all the rows are selected.

**Example** - Retrieve the list of selected items and show it to the user

```cobol
working-storage section.
77 selected-items-list pic x any length.

procedure division.
...
  inquire screen1-tv-1 items-selected selected-items-list.
  display message selected-items-list.
...
```
