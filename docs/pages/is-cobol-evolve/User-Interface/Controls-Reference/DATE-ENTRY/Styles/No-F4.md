## No-F4

Setting this style allows you to use the [F4] key as any other function key. The calendar can be opened clicking the button on the right side of the Date-Entry control. When this style is not set, which is the default, the function key [F4] opens the calendar and cannot be used as a normal function key.

**Example** - Define a date-entry control that does not use F4 to open up the calendar

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
     no-f4
     value-format davf-yyyymmdd
     .
```
