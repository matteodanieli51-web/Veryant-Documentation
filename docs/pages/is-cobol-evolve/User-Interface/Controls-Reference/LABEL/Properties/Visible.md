## Visible

This property assumes a value of "0" if the Label control is not visible, "1" if it is visible.

**Example** - Define a label initially not visible and make it visible on procedure division

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     id 25
     title "This is the main Title"
     visible 0
     .
...
procedure division.
...
  modify screen-1-la-1 visible 1
...
```
