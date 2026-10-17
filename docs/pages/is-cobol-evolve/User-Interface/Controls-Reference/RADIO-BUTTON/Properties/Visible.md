## Visible

This property assumes a value of "0" if the Radio-Button control is not visible, "1" if it is visible.

**Example** - Define a radio button initially invisible and later make it visible in the procedure division

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     id 5
     title "Option 2"
     group 1
     group-value 2
     value 1
     visible 0
     .
...
procedure division.
...
  modify screen-1-rb-2 visible 1
...
```
