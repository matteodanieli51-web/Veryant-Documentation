## Visible

This property assumes a value of "0" if the Combo-Box control is not visible, "1" if it is visible.

**Example -** Define an invisible combo-box in screen section to make it visible later in procedure division

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     3-d
     drop-down
     visible 0
     .
...
procedure division.
...
  modify screen-1-co-1 item-to-add ( "Red", "Blue", "Green", "Black" ).
...
  if color-selection
     modify screen-1-co-1 visible 1
  end-if.
...
```
