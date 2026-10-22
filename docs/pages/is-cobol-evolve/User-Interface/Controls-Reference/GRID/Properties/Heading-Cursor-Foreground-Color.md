## Heading-Cursor-Foreground-Color

This property allows you to set or retrieve the foreground color of both column and row headings where the cursor is positioned. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This color is always visible, even when the Grid doesn’t have the focus.

**Example** - Define a grid with heading background and foreground color on the current selection

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
     heading-cursor-background-color 3
     heading-cursor-foreground-color 7
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
```
