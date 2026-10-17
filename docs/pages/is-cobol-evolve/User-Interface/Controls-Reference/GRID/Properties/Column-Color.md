## Column-Color

This property allows you to set or retrieve the color of the column identified by the [X](./X) property. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details. When this property is set to zero, the column inherits the grid color.

**Example** - Set the color of a grid column

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 2
         column-color 130
         .
...
```
