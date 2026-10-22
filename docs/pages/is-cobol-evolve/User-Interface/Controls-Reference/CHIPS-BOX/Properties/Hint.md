## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Chips-Box control.

**Example -** Define a chips-box with a hint text

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 27.0
     column 10.0
     size 156
     lines 31
     hint "This area contains the selected activities"
     id 11
     .
```
