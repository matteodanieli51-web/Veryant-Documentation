## Decoration-Background-Visible

When this style is set, the default, column and row headings of the calendar have a visible background, otherwise the background color is not drawn.

**Example** - Define a date-entry control with decoration background

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
     decoration-background-visible.
```
