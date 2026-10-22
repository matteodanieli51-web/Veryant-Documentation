## Window-State

This property returns the current status of the window. The following symbolic values, included in the copy file [isgui.def](../../../../Appendices/Copybooks/isgui.def), can be returned. The table below shows the states related to each value:

|  |  |
| --- | --- |
| win-normal | The window is neither maximized nor minimized. |
| win-iconified | The window is minimized in the system tray. |
| win-maximized-horiz | The window is horizontally maximized. |
| win-maximized-vert | The window is vertically maximized. |
| win-maximized-both | The window is  maximized. |

This property has effect only on INDEPENDENT, INITIAL, MDI-CHILD and STANDARD windows.

**Example** - Check if the window is iconified

```cobol
working-storage section.
copy "isgui.def".
77 window-handle usage handle of window.
77 wk-state      pic 9.
...
procedure division.
...
  inquire window-handle window-state wk-state
  if wk-state = win-iconified
   | the window is iconified
...
```
