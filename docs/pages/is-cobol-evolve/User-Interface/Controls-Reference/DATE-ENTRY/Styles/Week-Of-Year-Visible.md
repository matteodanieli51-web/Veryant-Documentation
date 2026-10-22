## Week-Of-Year-Visible

When this style is set, the default, the week of the year is shown on the left side of the calendar.

**Example** - Define a date-entry control that shows the week of the year on the calendar area

```cobol
screen section.
...
  03 screen-1-de-2 Date-Entry
     line 28.5
     column 49.7
     size 13.6 cells
     lines 4.3 cells
     id 18
     week-of-year-visible.
```
