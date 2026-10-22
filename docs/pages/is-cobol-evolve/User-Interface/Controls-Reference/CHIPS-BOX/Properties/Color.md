## Color

This property allows you to set or retrieve the color of the Chips-Box control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a chips-box in screen section with a specific color

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     color 260
     id 10
     .
```
