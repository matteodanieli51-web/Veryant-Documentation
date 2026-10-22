## Row-Color

This property allows you to set or retrieve the color of the row identified by the [Y](./Y) property. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details. When this property is set to zero, the row inherits the column color.

**Example** - Modify the color of the third row in the grid

```cobol
procedure division.
...
  modify screen-1-gr-1
         y 3
         row-color 480
...
```
