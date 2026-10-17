## Foreground-Color

This property allows you to set or retrieve the foreground color of the Check-Box control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a check-box with a specific foreground color

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 156
     lines 31
     foreground-color 13
     id 11
     .
```
