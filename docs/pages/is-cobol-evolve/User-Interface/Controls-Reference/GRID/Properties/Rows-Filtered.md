## Rows-Filtered

This property allows you to retrieve the list of rows that are still visible after the grid content has been filtered.

The grid content is filtered in these conditions:

- when the user activates a filter by clicking on the funnel icon of a grid with the [Filterable-Columns](../Styles/Filterable-Columns) style,
- when the user activates a filter by clicking on the funnel icon of a grid with some [Filter-Types](./Filter-Types) set,
- when the user types something in the search panel that appears by pressing Ctrl-F or by setting the [Search-Panel](./Search-Panel) property to 1.

The list of rows is returned in the format: row1, row2, ... rowN.

If no row is visible after the filter has been applied, then spaces are returned.

If all rows are still visible after the filter has been applied or if no filter has been yet applied, then the value "-1" is returned. The same value is returned if you inquire the property on a grid that doesn’t provide filtering capabilities.

**Example** - Retrieve the list of visible rows and show it to the user

```cobol
working-storage section.
77 filtered-rows-list pic x any length.

procedure division.
...
  inquire screen1-gr-1 rows-filtered filtered-rows-list.
  evaluate filtered-rows-list
  when "-1"
    display message "all rows still visible"
  when space
    display message "no rows visible"
  when other
    display message "rows still visible: " filtered-rows-list
  end-evaluate
...
```
