## Row-Foreground-Color-Pattern

This property sets the foreground row color pattern, as explained in the [Row-Color-Pattern](./Row-Color-Pattern) property. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Modify a list-box to set the foreground color pattern

```cobol
procedure division.
...
  modify screen-1-lb-1
         row-foreground-color-pattern 7
         row-foreground-color-pattern 8
         row-foreground-color-pattern 9
...
```
