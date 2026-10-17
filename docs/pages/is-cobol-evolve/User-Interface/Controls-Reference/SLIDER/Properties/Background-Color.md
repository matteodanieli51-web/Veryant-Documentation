## Background-Color

This property allows you to set or retrieve the background color of the Slider control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a slider with background and foreground colors

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
