## Background-Color

This property allows you to set or retrieve the background color of the Tab-Control control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

The [Allow-Container](../Styles/Allow-Container) style must be set; both the tab area and tab labels are colored.

**Example** - Define a tab control with background and foreground color

```cobol
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     allow-container
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     background-color 7
     foreground-color 3
     id 10
     bitmap-width 16
     .
...
```
