## Chips-Radius

This numeric property allows you to set or retrieve the chips shape. The value ranges from 0 (rectangle) to 100 (round rectangle). The default value is 100.

**Example** - Define a chips-box control with square chips

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     chips-radius 0
     id 19
     .
```
