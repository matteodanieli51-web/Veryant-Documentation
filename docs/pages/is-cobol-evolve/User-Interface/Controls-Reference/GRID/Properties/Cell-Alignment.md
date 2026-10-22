## Cell-Alignment

This property allows you to set or retrieve the alignment of the cell identified by the [X](./X) and [Y](./Y) properties.

Allowed values are:

|  |  |
| --- | --- |
| "L" | The content of the cell is left aligned. Leading spaces are ignored. |
| "R" | The content of the cell is right aligned. Trailing spaces are ignored. |
| "C" | The content of the cell is centered. Leading and trailing spaces are ignored. |
| "U" | The content of the cell is left aligned. Leading spaces are kept. |
| "H" | The content of the cell rendered as HTML.<br>Note -  leading spaces after the <html\> tag are trimmed. |

**Example** - Modify a grid to set the alignment of a cell

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2
         cell-alignment "H"
         cell-data "<html><i>Albert</i></html>"
         cell-protection 1
         .
...
```
