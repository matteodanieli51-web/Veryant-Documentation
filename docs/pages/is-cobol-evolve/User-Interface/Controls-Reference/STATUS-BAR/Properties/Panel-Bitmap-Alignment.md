## Panel-Bitmap-Alignment

This property is used to set the placement of the panel bitmap, if any, in relation to the panel text. Valid values are:

|  |  |
| --- | --- |
| "C" | The bitmap is centered. Bitmap and text are always overlapped and the text is always above the bitmap. |
| "L" | The text is placed to the left of the bitmap. Bitmap and text do not overlap. |
| "R" | The text is placed to the right of the bitmap. Bitmap and text do not overlap. |

When values are enclosed between parentheses, the [Panel-Index](./Panel-Index) property is ignored, the 1st value refers to the 1st panel, the 2nd value refers to the 2nd panel and so on.

**Example** - Display a status-bar with 2 panels, having a bitmap aligned to the right each one

```cobol
working-storage section.
77 screen-1-st-2-hdl handle of status-bar.
77 icon-png2 pic s9(9) comp-4.
...
procedure division.
...
*> Load the bitmaps prior to use them on the status-bar, use W$BITMAP routine
*> Display a Window first to display the status-bar upon it
...
  display status-bar
     font Calibri-10v0-b
     color 257
     panel-widths ( 30 50)
     panel-style ( 1 2)
     panel-alignment ( "U" "U")
     panel-bitmap ( icon-png2 icon-png2)
     panel-bitmap-width ( 18 18)
     panel-bitmap-number ( 4 5)
     panel-bitmap-alignment ( "R" "R")
     handle screen-1-st-2-hdl
  .
  modify screen-1-st-2-hdl
     panel-index 1
     panel-text "Date: "
     panel-index 2
     panel-text "Screen Status: "
  .
```
