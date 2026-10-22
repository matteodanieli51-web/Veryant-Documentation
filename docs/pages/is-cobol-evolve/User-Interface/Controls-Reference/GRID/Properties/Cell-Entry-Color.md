## Cell-Entry-Color

This property allows you to set or retrieve the color of the cell that contains the cursor when such cell is in edit mode. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Set the colors during entry mode for a grid

```cobol
procedure division.
...
  modify screen-1-gr-1 cell-entry-color 480
..
```
