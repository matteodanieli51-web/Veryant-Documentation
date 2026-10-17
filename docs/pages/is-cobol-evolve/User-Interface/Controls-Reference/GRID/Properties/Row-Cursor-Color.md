## Row-Cursor-Color

This property allows you to set or retrieve the color of the row that contains the cursor. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This color is always visible, even when the Grid doesn’t have the focus.

**Example** - Modify a grid to set the row cursor foreground and background color

```cobol
procedure division.
...
  modify screen-1-gr-1 row-cursor-color 225
...
```
