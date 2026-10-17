## Maxday-Characters

This property affects the width of the columns and the number of characters for show the day name in the header of the calendar. It ranges from 1 to 3.

**Example -** Define an entry-field that shows only 1 character in the heading of each day column

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
     maxday-characters 1.
```
