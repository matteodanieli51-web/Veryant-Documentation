## Alignment

This property defines the alignment for every single column in a tree-view with [Table-View](../Styles/Table-View) style. Allowed values are:

|  |  |
| --- | --- |
| "L" | The content of the column is left aligned. Leading spaces are ignored. |
| "R" | The content of the column is right aligned. Trailing spaces are ignored. |
| "C" | The content of the column is centered. Leading and trailing spaces are ignored. |
| "U" | The content of the column is left aligned. Leading spaces are kept. |

Since this setting affects the alignment of each of the columns, a list of values is needed in order to determine how to align them.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies that the 1st column is left aligned and the 2nd column is centered. The other columns, if any, will be unaligned, the default.

```cobol
ALIGNMENT = ("L", "C")
```

When set to space or spaces, the list is reset.

Any other single value is appended to the list. This is useful to define a user-defined appearance.

**Example** - Define a tree table where the second column is centered and the third column is right aligned

```cobol
       WORKING-STORAGE SECTION.
       ...
       01  Tree-Data.
           03 Entry-Value pic x(20).
           03 Detail-1    pic x(30).
           03 Detail-2    pic x(50).
       ...
       SCREEN SECTION.
       ...
          03 screen-1-tv-1 tree-view table-view
             line 2, col 2, lines 10, size 50 cells
             column-headings, tiled-headings
             display-columns (1, 15, 30), virtual-width 60
             data-columns (record-position of Entry-Value,
                           record-position of Detail-1,
                           record-position of Detail-2)
             alignment ("U", "C", "R").
       ...
```
