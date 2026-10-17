## Color

This property allows you to set or retrieve the color of the Frame control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

In a Frame control, the foreground color is applied to the title text and to the borders while the background color is applied to the title label.

**Example** - Define a frame control with color property

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     color 6
     id 16
     .
```
