## Color

This property allows you to set or retrieve the color of the Tree-View control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a tree-view with color property

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
     no-box
     bitmap-handle app-png
     bitmap-width 20
     .
```
