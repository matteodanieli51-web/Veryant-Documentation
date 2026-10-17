## Enabled

This property assumes a value of "0" if the Date-Entry control is disabled, "1" if it is enabled.

**Example -** Define a date-entry control initially enabled to be disabled later on procedure division

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     enabled 1
     id 17
     century-date
     value-format davf-yyyymmdd
     .
...
procedure division.
...
   if disable-dates
      modify screen-1-de-1 enabled 0
...
```
