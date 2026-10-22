## Column-Foreground-Color

This property allows you to set or retrieve the foreground color of the column identified by the [X](./X) property. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Modify a grid, set the background and foreground color of one column

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 3
         column-background-color 13
         column-foreground-color 0
         .
...
```
