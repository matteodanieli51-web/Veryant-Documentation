## Cell-Entry-Background-Color

This property allows you to set or retrieve the background color of the cell that contains the cursor when such cell is in edit mode. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Set the background color during entry mode for a grid

```cobol
procedure division.
...
  modify screen-1-gr-1 cell-entry-background-color 7
...
```
