## Visible

This property assumes a value of "0" if the Chips-Box control is not visible, "1" if it is visible.

**Example -** Define an invisible chips-box in screen section to make it visible later in procedure division

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     visible 0
     .
...
procedure division.
...
  modify screen-1-chip-1 item-to-add ( "Red", "Blue", "Green", "Black" ).
...
  if color-selection
     modify screen-1-chip-1 visible 1
  end-if.
...
```
