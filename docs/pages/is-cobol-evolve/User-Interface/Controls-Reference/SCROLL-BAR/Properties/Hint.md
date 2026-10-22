## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Scroll-Bar control.

**Example** - Define a scroll-bar with hint text

```cobol
screen section.
...
  03 screen-1-sb-1 Scroll-Bar
     line 4.0
     column 41.5
     size 2.9 cells
     lines 39.7 cells
     color 229
     font Calibri-10v00
     help-id 3029
     id 5
     hint "Scroll-bar hint"
     .
...
```
