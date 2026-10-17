## Background-Color

This property allows you to set or retrieve the background color of the Label control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a label with background and foreground color

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     background-color 15
     foreground-color 6
     id 25
     title "This is the main Title"
     .
```
