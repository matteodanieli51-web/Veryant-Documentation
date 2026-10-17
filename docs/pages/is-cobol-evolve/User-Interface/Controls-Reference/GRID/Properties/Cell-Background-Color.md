## Cell-Background-Color

This property allows you to set or retrieve the background color of the cell identified by the [X](./X) and [Y](./Y) properties. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Modify a grid to set the background color of a cell

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2
         bitmap icon-png
         bitmap-number 3
         bitmap-trailing 1
         bitmap-width 18
         cell-background-color 3
         cell-foreground-color 7
         cell-data "Albert"
         .
...
```
