## Gradient-Orientation

This property allows you to set or retrieve the orientation of the gradient effect of the Tool-Bar control.

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

**Example** - Define a tool-bar whose background color goes from gray to white

```cobol
screen section.
...
  01 screen-1-tb-1.
     03 screen-1-pb-4 Push-Button
        line 1.7
        column 2.4
        size 5.2 cells
        lines 2.6 cells
        id 11
        title "Exit"
        .
     03 screen-1-pb-5 Push-Button
        line 1.7
        column 13.0
        size 5.2 cells
        lines 2.6 cells
        id 12
        title ">"
        .
     03 screen-1-pb-6 Push-Button
        line 1.7
        column 20.1
        size 5.2 cells
        lines 2.6 cells
        id 13
        title "<"
        .
...
procedure division.
...
  display tool-bar
          cell width 10
          cell height 10
          control font Default-Font
          gradient-color-1 rgb x#c0c0c0
          gradient-color-2 rgb x#ffffff
          gradient-orientation gradient-northeast-to-southwest
          lines 4.0
          handle screen-1-tb-1-hdl
  .
  display screen-1-tb-1 upon screen-1-tb-1-hdl.
...
```
