## Row-Cursor-Foreground-Color

This property allows you to set or retrieve the foreground color of the row that contains the cursor. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This color is always visible, even when the Grid doesn’t have the focus.

**Example** - Modify a grid to set the row cursor foreground color

```cobol
procedure division.
...
  modify screen-1-gr-1 row-cursor-foreground-color 7
...
```
