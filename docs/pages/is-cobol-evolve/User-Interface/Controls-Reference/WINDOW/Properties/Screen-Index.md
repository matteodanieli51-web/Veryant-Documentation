## Screen-Index

This property allows you to set or retrieve the ordinal number of the monitor where the window is positioned in a multi-monitor environment.

Call the [C$MONITOR](../../../../Appendices/Library-Routines/C$MONITOR/C$MONITOR) routine to know how many monitors are available.

The default value is 0. In this case the positioning on a different monitor is controlled by the window coordinates specified by SCREEN LINE and SCREEN COL: if the coordinates have negative values, then the window is displayed in the monitor left to the current one. If the coordinates have higher values, then the window is displayed in the monitor right to the current one. If SCREEN-INDEX is set to a value greater than zero instead, then SCREEN LINE and SCREEN COL are relative to the monitor pointed by SCREEN-INDEX.

**Example** - Display a window on monitor number 1, then move it to monitor number 2:

```cobol
working-storage section.
77 window-handle usage handle of window.
77 hmenu pic s9(9) comp-4.
...
procedure division.
...
*> Use w$menu to build the pop-up menu prior to display the window
...
           display standard  window background-low
              screen-index 1
              size 64.0
              lines 48.0
              cell width 10
              cell height 10
              label-offset 20
              control font Default-Font
              color 257
              modeless
              title-bar
              no wrap
              title "Screen"
              handle window-handle
              pop-up menu hmenu
           .
...
           modify window-handle screen-index 2.
...
```
