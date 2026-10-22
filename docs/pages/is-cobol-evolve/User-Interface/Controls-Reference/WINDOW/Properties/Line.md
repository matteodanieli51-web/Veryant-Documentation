## Line

This property allows you to specify the Window control’s vertical position. The value is specified in cells. Decimal values are allowed. The position is relative to the parent window.

**Example** - Display a window with a line and column relative to the main window

```cobol
working-storage section.
77 window-handle1 usage handle of window.
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
          title "Screen"
          handle window-handle1
          .
```
