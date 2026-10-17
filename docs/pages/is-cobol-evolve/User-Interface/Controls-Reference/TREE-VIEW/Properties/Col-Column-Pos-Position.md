## [ Col | Column | Pos | Position ]

This property allows you to specify the Tree-View control’s horizontal position. The value is specified in cells. Decimal values are allowed.

When the Tree-View control is part of a Screen Section, you may specify 'PLUS', '+' or '-' between the property name and its value. The horizontal position of the Tree-View control will be relative to the ending position of the prior Screen Section item.

When the Tree-View control is part of a Screen Section and the COL Property is omitted, COL + 1 is implied.

```cobol
03  Label, COL 2, SIZE 12, (more screen options).
03  Tree-View, COL + 1, (more screen options).
```

The second control will be placed at column 14.

**Example** - Position a tree-view at column 5.0 on the screen section definition screen section.

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 8.0
     column 5.0
     color 7
     size 45.0 cells
     id 2
     .
```
