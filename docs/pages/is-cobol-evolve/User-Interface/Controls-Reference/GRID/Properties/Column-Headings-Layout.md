## Column-Headings-Layout

This property defines the layout of each column by adding together one or more of the following values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def)

| Constant name | Value | Description |
| --- | --- | --- |
| grchl-horizontal | 0 | The text is displayed horizontally, from left to right. |
| grchl-vertical-left | 1 | The text is displayed vertically, from bottom to top. |
| grchl-vertical-right | 2 | The text is displayed vertically, from top to bottom. |
| grchl-align-center | 4 | The text is centered in the cell. |
| grchl-align-left | 8 | The text is left aligned in the cell. |
| grchl-align-right | 16 | The text is right aligned in the cell. |
| grchl-align-top | 32 | The text is placed at the top of the cell. |
| grchl-align-bottom | 64 | The text is placed at the bottom of the cell. |

Since this setting affects each column, a list of values is needed in order to determine how to draw them.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies a vertical heading on the 1st column and horizontal heading on the 2nd column.

```cobol
COLUMN-HEADINGS-LAYOUT = (1, 0)
```

When a single value greater than or equal to zero is set, it is appended to the list. This is useful to define a user-defined appearance.

Setting the property to -1 resets the list.

Bitmaps shown in the heading cells are not rotated along with the text.

**Example** - Modify a grid to set vertical headings

```cobol
procedure division.
...
  modify screen-1-gr-1
         column-headings-layout ( 1 1 1 )
         .
...
```
