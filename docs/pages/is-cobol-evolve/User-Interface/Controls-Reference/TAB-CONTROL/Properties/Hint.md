## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Tab-Control control.

**Example** - Define a tab-control with hint text

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     id 10
     hint "Tab Control Hint"
     .
```
