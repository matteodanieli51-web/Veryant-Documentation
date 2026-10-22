## Gradient-Orientation

This property allows you to set or retrieve the orientation of the gradient effect of the Tree-View control.

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

**Note -** the gradient effect is not supported along with the [Table-View](../Styles/Table-View) style.

**Example** - Define a tree-view control whose background color goes from gray to white

```cobol
screen section.
...
  03 screen-1-gr-1 Tree-View
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     gradient-color-1 rgb x#c0c0c0
     gradient-color-2 rgb x#ffffff
     gradient-orientation gradient-northeast-to-southwest
     id 16
     .
...
```
