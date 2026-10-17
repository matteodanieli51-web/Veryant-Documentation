## Unsorted

This style causes the items contained in the list to be shown in the same order they have been added to the List-Box control.

**Example** - Define a list-box where items are not automatically sorted

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     unsorted
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     .
```
