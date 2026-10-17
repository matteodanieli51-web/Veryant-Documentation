## Weekday-Foreground

This property allows you to set or retrieve the color of the weekdays. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a date-entry control with the weekday headings in magenta color

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     century-date
     value-format davf-yyyymmdd
     calendar-font Bell-MT-10v0-b
     sunday-foreground 15
     weekday-foreground 14
     .
```
