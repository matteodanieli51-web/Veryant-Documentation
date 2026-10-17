## Event-List

This property specifies a list of events that may or may not be fired depending on the value of the [Exclude-Event-List](./Exclude-Event-List) property. The property requires a sequence of numeric values. It’s suggested that you use the constant values defined in the [isgui.def](../../../../Appendices/Copybooks/isgui.def) copybook. Multiple values must be enclosed between parenthesis and separated by a space.

**Example -** Define a status-bar including event handling for mouse-enter and mouse-exit only

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
          notify-mouse
          event-list ( msg-mouse-enter msg-mouse-exit)
          exclude-event-list 0
          handle screen-1-st-2-hdl
          .
```
