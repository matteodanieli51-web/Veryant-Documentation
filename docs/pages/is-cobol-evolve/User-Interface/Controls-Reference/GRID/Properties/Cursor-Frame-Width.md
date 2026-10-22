## Cursor-Frame-Width

This property allows you to set the way the cell containing the cursor will be highlighted. Valid values are:

|  |  |
| --- | --- |
| <0 | A dotted line is drawn inside the cell. The distance between the dotted line and the border is the absolute value of the value specified. The value -2 means that a dotted line will be drawn inside the cell, two pixels from the border. |
| 0 | No border is drawn. |
| > 0 | A black border is drawn. The value specified represents its thickness, in pixels. |

By default, the cursor frame width is 2.

The cursor frame is visible only when the Grid control has the focus.

**Example** - Define a grid with the width of the cursor frame

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
