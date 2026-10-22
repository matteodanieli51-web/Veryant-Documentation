## Read-Only

When this style is set, the entry-field part of the control is not editable. The user can change the value only by using the spinner buttons and the calendar.

**Example** - Define a date-entry control that is read-only

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
     read-only
     .
```
