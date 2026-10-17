## Relative-Offset

When this style is set, the LINE and COLUMN coordinates of controls displayed on a Tab-Control with the [Allow-Container](./Allow-Container) style are relative to the Tab-Control area. If the style is not set, then coordinates are relative to the window area.

**Example** - Define a tab-control with relative-offset style

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     help-id 1036
     id 10
     background-low
     bold
     allow-container
     relative-offset
     .
```
