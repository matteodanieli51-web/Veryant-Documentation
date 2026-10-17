## Unsorted

When this style is set, items contained in the list are shown in the same order they have been added to the Chips-Box control.

**Example -** Define a chips-box in screen section that does not sort items automatically

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     unsorted
     .
```
