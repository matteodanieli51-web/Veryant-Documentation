## Today-Button-Visible

When this style is set, the pop-up calendar component includes a button that allows you to quickly select the current date.

**Example** - Define a date-entry control with the today button in the calendar component

```cobol
screen section.
...
  03 screen-1-de-2 Date-Entry
     line 28.5
     column 49.7
     size 13.6 cells
     lines 4.3 cells
     id 18
     today-button-visible.
```
