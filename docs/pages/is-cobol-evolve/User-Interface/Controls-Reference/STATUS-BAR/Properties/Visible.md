## Visible

This property assumes a value of "0" if the Status-Bar control is not visible, "1" if it is visible.

**Example** - Display a status-bar, initially invisible to make it visible later on

```cobol
working-storage section.
77 screen-1-st-2-hdl handle of status-bar.
01 filler pic x.
   88 show-status-bar value "y" false "n".

...
procedure division.
...
*> Display a Window first to display the status-bar upon it
...
  display status-bar
          visible 0
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
...
  if show-status-bar
     modify screen-1-st-2-hdl visible 1
  end-if
...
```
