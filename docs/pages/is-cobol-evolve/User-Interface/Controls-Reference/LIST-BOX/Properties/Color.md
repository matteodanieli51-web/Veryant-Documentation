## Color

This property allows you to set or retrieve the color of the List-Box control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a list-box with background and foreground color in one property

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     color 294
     id 1
     .
```
