## Screen Line

This property allows you to set or retrieve the vertical position of the window in the screen. It is measured in pixels and the origin of the screen is at 0.

**Example** - Display a window on a specific screen column and screen line

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
          title "Screen"
          handle window-handle
          .
...
```
