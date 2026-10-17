## Rollover-Color

This property allows you to set or retrieve the color of the Check-Box control when the mouse pointer hovers over it. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a check-box in screen section with specific rollover colors

```cobol
screen section.
...
  03 screen-1-cb-1 Check-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     color 260
     rollover-color 512
     id 10
     title "Sugar with the coffee?"
     .
```
