## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Label control.

**Example** - Define a label with a hint text

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     hint "Label for the title"
     id 25
     title "This is the main Title"
     .
```
