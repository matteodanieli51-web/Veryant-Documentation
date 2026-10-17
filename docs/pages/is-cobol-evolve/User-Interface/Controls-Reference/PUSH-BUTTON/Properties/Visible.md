## Visible

This property assumes a value of "0" if the Push-Button control is not visible, "1" if it is visible.

**Example** - Define an invisible push-button and make it visible in procedure division

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     visible 0
     title "Accept"
     .
...
procedure division.
...
   modify screen-1-pb-2 visible 1
...
```
