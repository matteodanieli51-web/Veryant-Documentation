## Cursor-Foreground-Color

This property allows you to set or retrieve the foreground color of the cell that contains the cursor. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This color is visible only when the Grid control has the focus.

**Example** - Define a grid with background and foreground color for the cursor cell

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     row-dividers 1
     cursor-background-color 10
     cursor-foreground-color 8
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
```
