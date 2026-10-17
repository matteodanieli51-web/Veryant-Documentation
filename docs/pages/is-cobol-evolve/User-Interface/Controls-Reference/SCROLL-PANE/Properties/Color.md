## Color

This property allows you to set or retrieve the color of the Scroll-Pane control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a scroll pane with color property

```cobol
screen section.
...
  03 screen-1-sp-1 Scroll-pane
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     color 135
     .
```
