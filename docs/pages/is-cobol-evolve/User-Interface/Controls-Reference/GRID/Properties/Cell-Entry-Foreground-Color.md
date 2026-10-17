## Cell-Entry-Foreground-Color

This property allows you to set or retrieve the foreground color of the cell that contains the cursor when such cell is in edit mode. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Set the text color during entry mode for a grid

```cobol
procedure division.
...
  modify screen-1-gr-1 cell-entry-foreground-color 3
..
```
