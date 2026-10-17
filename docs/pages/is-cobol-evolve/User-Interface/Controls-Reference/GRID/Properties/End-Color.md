## End-Color

This property allows you to set or retrieve the color used in the area extending beyond the last row or column. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a grid with a gray color in the extended areas

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     row-dividers 1
     end-color 9
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
```
