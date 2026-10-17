## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Entry-Field control.

**Example** - Define an entry-field control with a hint value

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 29.0
     column 49.5
     size 13.1 cells
     lines 4.6 cells
     id 19
     hint "Enter your original code here"
     3-d.
```
