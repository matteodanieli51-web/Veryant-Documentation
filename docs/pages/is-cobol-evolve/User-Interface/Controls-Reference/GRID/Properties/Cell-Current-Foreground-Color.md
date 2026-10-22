## Cell-Current-Foreground-Color

This property allows you to retrieve the foreground color of the cell identified by the [X](./X) and [Y](./Y) properties. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Get the foreground color of a cell

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2
  inquire screen-1-gr-1
          cell-current-foreground-color ws-cell-f-color
...
```
