## Background-Color

This property allows you to set or retrieve the background color of the Frame control. This color is applied to the background of the Frame title, if any. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a frame control with background and foreground color

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     background-color 3
     foreground-color 12
     id 16
     .
```
