## Visible

This property assumes a value of "0" if the Frame control is not visible, "1" if it is visible.

**Example** - Define a frame initially invisible to make it visible later on procedure division

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     id 16
     title-position 2
     title "Customer Data Area"
     visible 0
     .
...
procedure division.
...
   modify screen-1-fr-1 visible 1
...
```
