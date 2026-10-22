## Background-Color

This property allows you to set or retrieve the background color of the Grid control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a grid with background and foreground color

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     background-color 3
     foreground-color 7
     id 1
     no-box
     column-headings
     row-dividers 1
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
```
