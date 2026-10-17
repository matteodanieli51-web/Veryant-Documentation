## Panel-Alignment

This property is used to set the appearance of the panel identified by the [Panel-Index](./Panel-Index) property. The following  values can be assigned.

|  |  |
| --- | --- |
| "C" | The text in the panel is centered. |
| "L" | The text in the panel is left justified. |
| "R" | The text in the panel is right justified. |

By default, panel text is left justified.

When values are enclosed between parentheses, the [Panel-Index](./Panel-Index) property is ignored, the 1st value refers to the 1st panel, the 2nd value refers to the 2nd panel and so on.

**Example** - Define a status-bar with 2 panels, defining the alignment of each one

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
