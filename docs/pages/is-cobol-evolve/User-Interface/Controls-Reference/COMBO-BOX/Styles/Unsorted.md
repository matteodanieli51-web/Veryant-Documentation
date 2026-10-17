## Unsorted

When this style is set, items contained in the list are shown in the same order they have been added to the Combo-Box control.

**Example -** Define a combo-box in screen section that does not sort items automatically

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     unsorted
     3-d
     drop-down
     .
```
