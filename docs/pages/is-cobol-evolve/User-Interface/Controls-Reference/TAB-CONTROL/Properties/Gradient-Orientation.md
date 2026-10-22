## Gradient-Orientation

This property allows you to set or retrieve the orientation of the gradient effect of the Tab-Control control.

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

**Example** - Define a tab control whose background color goes from gray to white

```cobol
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     gradient-color-1 rgb x#c0c0c0
     gradient-color-2 rgb x#ffffff
     gradient-orientation gradient-northeast-to-southwest
     id 10
     bitmap-width 16
     .
...
```
