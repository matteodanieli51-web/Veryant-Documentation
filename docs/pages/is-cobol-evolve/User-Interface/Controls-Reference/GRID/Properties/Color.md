## Color

This property allows you to set or retrieve the color of the Grid control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a grid with background and foreground color in one property

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     color 294
     id 1
     no-box
     column-headings
     row-dividers 1
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
```
