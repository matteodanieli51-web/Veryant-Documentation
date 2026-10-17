## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Slider control.

**Example** - Define a slide-bar with a hint text

```cobol
screen section.
...
  03 screen-1-sl-1 Slider
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     color 135
     id 9
     hint "Slide this bar to increase the height of rows in the grid below"
     horizontal
     .
```
