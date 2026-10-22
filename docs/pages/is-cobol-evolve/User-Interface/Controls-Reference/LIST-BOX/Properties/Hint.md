## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the List-Box control.

**Example** - Define a list-box with hint text

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     font Calibri-10v0
     help-id 5040
     id 1
     hint "ListBox Hint Information"
     .
...
```
