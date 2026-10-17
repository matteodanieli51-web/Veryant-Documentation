## Foreground-Color

This property allows you to set or retrieve the foreground color of the Slider control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a slide-bar with foreground and background colors

```cobol
screen section.
...
  03 screen-1-sl-1 Slider
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     background-color 6
     foreground-color 3
     id 9
     horizontal
     .
```
