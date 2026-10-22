## Foreground-Color

This property allows you to set or retrieve the foreground color of the Date-Entry control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a date-entry control with yellow background and brown foreground colors

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 12.6 cells
     lines 3.1 cells
     id 17
     century-date
     value-format davf-yyyymmdd
     .
```
