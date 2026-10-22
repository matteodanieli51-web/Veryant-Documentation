## Background-Color

This property allows you to set or retrieve the background color of the Check-Box control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a check-box in screen section with a background color

```cobol
screen section.
...
  03 screen-1-cb-1 Check-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     background-color 3
     id 10
     title "Sugar with the coffee?"
     .
```
