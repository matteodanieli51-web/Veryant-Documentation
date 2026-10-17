## Background-Color

This property allows you to set or retrieve the background color of the List-Box control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a list-box with background and foreground color

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     background-color 3
     foreground-color 7
     id 1
     .
```
