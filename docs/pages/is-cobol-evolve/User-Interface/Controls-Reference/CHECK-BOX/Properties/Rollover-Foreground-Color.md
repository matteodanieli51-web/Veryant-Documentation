## Rollover-Foreground-Color

This property allows you to set or retrieve the foreground color of the Check-Box control when the mouse pointer hovers over it. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a check-box in screen section with a specific rollover color

```cobol
screen section.
...
  03 screen-1-cb-1 Check-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     foreground-color 3
     rollover-foreground-color 4
     id 10
     title "Sugar with the coffee?"
     .
```
