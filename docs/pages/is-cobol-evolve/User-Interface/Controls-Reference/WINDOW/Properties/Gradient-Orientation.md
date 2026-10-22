## Gradient-Orientation

This property allows you to set or retrieve the orientation of the gradient effect of the Window control.

Possible values are:

| Value | Orientation |
| --- | --- |
| 0 | North to South |
| 1 | Northeast to Southwest |
| 2 | East to West |
| 3 | Southeast to Northwest |
| 4 | South to North |
| 5 | Southwest to Northeast |
| 6 | West to East |
| 7 | Northwest to Southeast |

Constants for the above values are provided in the [isgui.def](../../../../Appendices/Copybooks/isgui.def) copybook.

If this property is not set, the default orientation is North to South.

**Note -** the gradient effect is supported only on graphical screens. If the window includes character based attributes like ERASE or BLANK, or if character based UI is displayed over it, then the gradient effect is not supported.

**Example** - Display a standard window whose background color goes from gray to white

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
          gradient-color-1 rgb x#c0c0c0
          gradient-color-2 rgb x#ffffff
          gradient-orientation gradient-northeast-to-southwest
          resizable
          title "Screen"
          handle window-handle
          .
...
```
