## Pop-Up Menu

Use this property to associate a pop-up menu with the Status-Bar control by assigning a pop-up menu handle to it. The [MSG-ST-DBLCLICK](../Events/MSG-ST-DBLCLICK) event may be generated.

**Example** - Define a status-bar with 2 panels and a pop-up menu

```cobol
working-storage section.
77 screen-1-st-2-hdl handle of status-bar.
77 hmenu             pic s9(9) comp.4.
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
          pop-up menu hmenu
          handle screen-1-st-2-hdl
          .
*> Use w$menu to build the pop-up menu
```
