## Tab-Border-Color

This property allows you to set or retrieve the border color of the tabs in a Tab-Control control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This property affects only Tab-Controls with the [Accordion](../Styles/Accordion) style and Tab-Controls with the [Tab-Flat](../Styles/Tab-Flat) style.

**Example** - Define a tab control with border color for the tabs

```cobol
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     tab-flat
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     tab-border-color 7
     id 10
     bitmap-width 16
     .
...
```
