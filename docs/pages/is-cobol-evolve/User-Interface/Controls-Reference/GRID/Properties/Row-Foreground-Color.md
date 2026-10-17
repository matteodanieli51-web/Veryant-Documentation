## Row-Foreground-Color

This property allows you to set or retrieve the foreground color of the row identified by the [Y](./Y) property. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Modify a grid to set the foreground color of a row

```cobol
procedure division.
...
  modify screen-1-gr-1 y = 5 row-foreground-color 7
```
