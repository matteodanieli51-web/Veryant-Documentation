## Panel-Widths

This property is used to set the width, in cells, of the panel identified by the [Panel-Index](./Panel-Index) property.

When values are enclosed between parentheses, the [Panel-Index](./Panel-Index) property is ignored, the 1st value refers to the 1st panel, the 2nd value refers to the 2nd panel and so on.

Setting this property to 0 creates a status bar with one panel extending across its entire width and no text and reset existing panels, if any.

When the status-bar is displayed on a resizable window, when the window shrinks below the size specified by Panel-Widths, all the panels are reset to an average size small enough so that all panels fit in the window. If you do not want the all of the panels truncated, set the width of the last panel to "-1", this will cause the last panel to be sized to whatever space is left available on the window after the first panels have been accommodated.

**Example** - Define a status-bar with 2 panels, the former has fixed width while the latter extends to the end of the window

```cobol
working-storage section.
77 screen-1-st-2-hdl handle of status-bar.
...
procedure division.
...
*> Display a Window first to display the status-bar upon it
...
  display status-bar
          font Default-Font
          background-color 7
          foreground-color 3
          panel-widths ( 30 -1)
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
     panel-hint "This is the current system date"
     panel-color 516
     panel-index 2
     panel-text "Screen Status: "
     panel-hint "This is the status of the program"
  .
```
