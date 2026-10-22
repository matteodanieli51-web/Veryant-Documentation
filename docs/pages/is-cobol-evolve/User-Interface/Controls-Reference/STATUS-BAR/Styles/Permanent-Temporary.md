## \{ Permanent | Temporary \}

|  |  |
| --- | --- |
| Permanent | A control with this style applied can be destroyed only by using the DESTROY statement or when the parent window is destroyed. A permanent control is more efficient than a "temporary" one since it is not created each time a DISPLAY statement is executed. This style is set by default. |
| Temporary | Temporary controls are destroyed when a DESTROY statement is executed, when the parent window is destroyed, when another control is created in its same position, or when a Screen Section containing a BLANK SCREEN keyword is displayed. Temporary controls are less efficient than "permanent" ones since they are created each time a DISPLAY statement is executed. |

**Example** - Display a status-bar that is temporary

```cobol
working-storage section.
77 screen-1-st-2-hdl handle of status-bar.
...
procedure division.
...
*> Display a Window first to display the status-bar upon it
...
  display status-bar
          background-low
          temporary
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
