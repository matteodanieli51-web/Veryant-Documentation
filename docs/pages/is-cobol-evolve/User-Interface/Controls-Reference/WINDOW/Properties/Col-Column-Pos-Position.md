## [ Col | Column | Pos | Position ]

This property allows you to specify the Window control’s horizontal position. The value is specified in cells. Decimal values are allowed. The position is relative to the parent window.

**Example** - Display a new window at line 2, column 3

```cobol
working-storage section.
77 window-handle usage handle of window.
...
procedure division.
...
  display independent window background-low
          line 2.0
          column 3.0
          size 64.0
          lines 55.8
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          resizable
          modeless
          title-bar
         title "Screen"
          handle window-handle
          .
```
