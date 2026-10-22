## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Tree-View control.

**Example** - Define a tree-view with a hint text

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     id 2
     hint "Main Menu"
     no-box
     .
```
