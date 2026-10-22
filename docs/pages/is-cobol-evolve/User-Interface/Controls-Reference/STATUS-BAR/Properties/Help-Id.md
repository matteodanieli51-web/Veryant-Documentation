## Help-Id

This property allows you to assign a unique ID to the Status-Bar control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Display a status-bar with 2 panels and help id

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
          help-id 4
          handle screen-1-st-2-hdl
          .
```
