## Enabled

This property assumes a value of "0" if the Window control is disabled, "1" if it is enabled.

When the window is disabled, all the enabled controls inside are disabled as well.

When the window is enabled, all the controls inside that don't have their [Enabled](../../../../Appendices/Graphical-Control-List) property set to 0 are enabled as well.

**Example** - Display a standard window and disable it later

```cobol
working-storage section.
77 window-handle usage handle of window.
...
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 64.0
          lines 55.8
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 260
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          handle window-handle
          .
...
  modify window-handle enabled 0
...
```
