## Active-Tab-Color

This property allows you to set or retrieve the color of the active tab in a Tab-Control control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This property affects only Tab-Controls with the [Accordion](../Styles/Accordion) style and Tab-Controls with the [Tab-Flat](../Styles/Tab-Flat) style.

**Example** - Define a tab-control with foreground and background colors for the active tab

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     active-tab-color 136
     id 10
     bitmap-width 18
     bitmap-handle icon-png
     .
```
