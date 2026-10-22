## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Date-Entry control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example** - Define a date-entry control that shows the week of the year on the calendar area

```cobol
screen section.
...
  03 screen-1-de-2 Date-Entry
     line 28.5
     column 49.7
     size 13.6
     lines 4.3 cells
     id 18
     width-in-cells.
```
