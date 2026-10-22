## Cell-Current-Color

This property allows you to retrieve the current color of the cell identified by the [X](./X) and [Y](./Y) properties. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Get the color of a cell

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2
  inquire screen-1-gr-1
          cell-current-color ws-cell-color
...
```
