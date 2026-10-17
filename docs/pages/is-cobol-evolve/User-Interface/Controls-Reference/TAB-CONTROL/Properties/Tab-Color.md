## Tab-Color

This property allows you to set or retrieve the color of the page titles. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a tab-control whose page titles have background black and foreground white

```cobol
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     tab-flat
     tab-color 48
     id 10
     bitmap-width 16
     .
...
```
