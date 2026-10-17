## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Date-Entry control.

**Example -** Define a date-entry control with a Hint text

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     hint "Enter your enrollment date"
     century-date
     value-format davf-yyyymmdd
     .
```
