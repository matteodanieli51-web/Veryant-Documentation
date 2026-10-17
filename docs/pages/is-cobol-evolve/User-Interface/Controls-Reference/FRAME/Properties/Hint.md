## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Frame control.

**Example** - Define a frame control with hint text

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     hint "Customer data area"
     id 16
     .
```
