## Decoration-Borders-Visible

When this style is set, a border is drawn around each item of the column and row headings of the calendar, otherwise, headings appear flat.

**Example** - Define a date-entry control with decoration borders

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
     decoration-background-visible
     decoration-borders-visible.
```
