## Cursor-Frame-Color

This property allows you to change the cursor frame color from black to a color of your choice. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a grid with a bright red cursor framel

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
     cursor-frame-color 13
     num-rows 5
     .
```
