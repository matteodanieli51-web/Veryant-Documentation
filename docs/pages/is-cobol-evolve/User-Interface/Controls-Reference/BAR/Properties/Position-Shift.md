## Position-Shift

With this property it is possible to adjust the vertical position of the horizontal bars or the horizontal position of the vertical bars. The adjustment is in pixels. Negative values can be used to shift the bar up or left.

**Example -** Define 2 horizontal bars in the same line, but define the 2nd one to shift 5 pixels, the visible result will be that the second one will show 5 pixels below the 1st one althoug they are defined on the same line

```cobol
screen section.
...
  03 screen-1-br-1 Bar
     line 5.0
     column 2.0
     size 9.0 cells
     id 1
     .
  03 screen-1-br-2 Bar
     line 5.0
     column 12.0
     size 46.0 cells
     id 2
     position-shift 5
     .
```
