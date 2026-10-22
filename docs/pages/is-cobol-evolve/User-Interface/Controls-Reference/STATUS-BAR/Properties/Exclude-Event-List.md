## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired. If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

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
