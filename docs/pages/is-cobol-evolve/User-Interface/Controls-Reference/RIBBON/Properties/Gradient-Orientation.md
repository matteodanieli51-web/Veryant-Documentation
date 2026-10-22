## Gradient-Orientation

This property allows you to set or retrieve the orientation of the gradient effect of the Ribbon control.

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

**Example** - Display a Ribbon control whose background color goes from gray to white

```cobol
working-storage section.
77 screen-1-rbn-1-hdl  handle of ribbon.
...
procedure division.
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 0 0)
          lines 4.4375
          gradient-color-1 rgb x#c0c0c0
          gradient-color-2 rgb x#ffffff
          gradient-orientation gradient-northeast-to-southwest
          id 6
          bitmap-width 16
          handle screen-1-rbn-1-hdl
          .
...
```
