## Row-Background-Color-Pattern

This property sets the background row color pattern, as explained in the [Row-Color-Pattern](./Row-Color-Pattern) property. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Modify a list-box to set its background color patern

```cobol
procedure division.
...
  modify screen-1-lb-1
         row-background-color-pattern 7
         row-background-color-pattern 3
         row-background-color-pattern 1
...
```
