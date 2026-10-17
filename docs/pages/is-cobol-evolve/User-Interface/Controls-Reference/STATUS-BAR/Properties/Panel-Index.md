## Panel-Index

This property represents the panel that the following properties refer to: [Panel-Alignment](./Panel-Alignment), [Panel-Bitmap](./Panel-Bitmap), [Panel-Bitmap-Number](./Panel-Bitmap-Number), [Panel-Bitmap-Width](./Panel-Bitmap-Width), [Panel-Style](./Panel-Style), [Panel-Text](./Panel-Text), and [Panel-Widths](./Panel-Widths).

**Example** - Display a status-bar with 2 panels each one with its index

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
     panel-hint "This is the current system date"
     panel-color 516
     panel-index 2
     panel-text "Screen Status: "
     panel-hint "This is the status of the program"
  .
```
