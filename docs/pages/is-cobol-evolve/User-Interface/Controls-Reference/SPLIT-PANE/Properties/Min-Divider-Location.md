## Min-Divider-Location

This property sets or retrieve the leftmost or topmost position of the divider bar in the Split-Pane. The value is expressed in percentage where 0 is the leftmost or topmost position and 100 is the rightmost or bottommost position. The default value is 0.

**Example** - Define a split-pane that whose divider bar can’t be moved to the left.

```cobol
screen section.
...
  03 screen-1-sp-1 Split-pane
     line 8.0
     column 5.0
     color 7
     size 45.0 cells
     min-divider-location 50
     .
```
