## Max-Height

The control's maximum height. This setting will affect the Layout Manager’s behavior.

**Example** - Define a status-bar with layout-data that allows X and Y resize if the layout manager requires so and with maximum and minimum heights

```cobol
working-storage section.
77 screen-1-st-2-hdl handle of status-bar.
...
procedure division.
...
*> Display a Window first to display the status-bar upon it
...
  display status-bar
          lines 3.5
          layout-data 17
          max-height 4.5
          min-height 1.5
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
