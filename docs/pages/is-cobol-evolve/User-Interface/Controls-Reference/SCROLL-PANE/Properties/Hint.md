## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Scroll-Pane control.

**Example** - Define a scroll pane with hint text

```cobol
screen section.
...
  03 screen-1-sp-1 Scroll-pane
     line 4.0
     column 41.5
     size 2.9 cells
     lines 39.7 cells
     hint "Scroll-pane hint"
     .
...
```
