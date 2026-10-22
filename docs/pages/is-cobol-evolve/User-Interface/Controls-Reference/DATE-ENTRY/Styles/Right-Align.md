## Right-Align

This style affects the position of the date within the Date-Entry control. When set, the date is right aligned. If not set, which is the default, it is left aligned.

**Example** - Define a date-entry control that shows the date right aligned

```cobol
screen section.
...
  03 screen-1-de-2 Date-Entry
     line 28.5
     column 49.7
     size 13.6 cells
     lines 4.3 cells
     id 18
     century-date
     value-format davf-yyyymmdd
     calendar-font Default-Font
     right-align
     .
```
