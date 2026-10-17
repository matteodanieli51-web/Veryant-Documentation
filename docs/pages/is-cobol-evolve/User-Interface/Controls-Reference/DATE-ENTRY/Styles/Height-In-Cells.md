## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Date-Entry control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a date-entry control with height in cells

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1
     id 17
     century-date
     height-in-cells.
```
