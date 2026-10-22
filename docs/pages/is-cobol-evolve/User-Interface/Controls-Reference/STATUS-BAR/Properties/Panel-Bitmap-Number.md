## Panel-Bitmap-Number

This property defines which bitmap among the ones in the bitmap strip referenced by the [Panel-Bitmap](./Panel-Bitmap) property is to be displayed in the panel identified by the [Panel-Index](./Panel-Index) property.

When the values are enclosed between parentheses, the [Panel-Index](./Panel-Index) property is ignored, the 1st value refers to the 1st panel, the 2nd value refers to the 2nd panel and so on.

**Example** - Display a status-bar with 2 panels having each one a different bitmap image from the same bitmap file

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
              panel-bitmap-alignment ( "U" "U")
              handle screen-1-st-2-hdl
           .
           modify screen-1-st-2-hdl
              panel-index 1
              panel-text "Date: "
              panel-index 2
              panel-text "Screen Status: "
           .
```
