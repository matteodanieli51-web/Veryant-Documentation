## Row-Background-Color

This property allows you to set or retrieve the background color of the row identified by the [Y](./Y) property. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Modify row 3 to set its background color

```cobol
procedure division.
...
  modify screen-1-gr-1 y = 3 row-background-color 7
...
```
