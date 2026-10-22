## Visible

This property assumes a value of "0" if the Window control is not visible, "1" if it is visible.

When the window is hidden, all the visible controls inside are hidden as well.

When the window is made visible, all the controls inside that don't have their [Visible](../../../../Appendices/Graphical-Control-List) property set to 0 are made visible as well.

**Example** - Display a window and make it invisible later

```cobol
working-storage section.
77 window-handle usage handle of window.
...
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 22.1
          lines 18.1
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 257
          resizable
          modeless
          title-bar
          no wrap
          title "Main Menu"
          handle window-handle
          .
...
  modify window-handle visible 0
...
```
