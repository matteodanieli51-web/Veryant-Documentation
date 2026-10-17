## Width

This property, expressed in pixels, sets the thickness of the bar.

**Example -** Define a bar on screen section with WIDTH 3

```cobol
screen section.
...
  03 screen-1-br-1 Bar
     line 8.0
     column 5.0
     color 7
     size 45.0 cells
     id 2
     width  = 3
     .
```
