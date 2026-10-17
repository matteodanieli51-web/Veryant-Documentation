## Undecorated

When this style is set, native decorations like frame and title bar are not shown.

This style is suggested when using LAFs that provide their own frame and title bar. Without the Undecorated style, these LAFs show a double title-bar.

Another scenario where this style is useful is the WebClient environment. In the WebClient environment you might want to remove the decoration of the window so the program screen will look like a common HTML form.

This style has no effect on MDI windows.

Notification windows are always undecorated by default.

**Example** - Display a window with undecorated style

```cobol
working-storage section.
77 window-handle usage handle of window.
...
procedure division.
...
  display floating  window background-low
          size 37.3
          lines 34.2
          line 20
          column 1
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 257
          modeless
          system menu
          title-bar
          no wrap
          undecorated
          title "Screen"
          handle window-handle1
          .
```
