## Font

This property specifies the font used to display the content of the Status-Bar control.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Display a status-bar with 2 panels and special font

```cobol
working-storage section.
77 screen-1-st-2-hdl handle of status-bar.
77 Calibri-10v0-b handle of font.
...
procedure division.
...
*> Display a Window first to display the status-bar upon it
...
  display status-bar
          font Calibri-10v0-b
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
