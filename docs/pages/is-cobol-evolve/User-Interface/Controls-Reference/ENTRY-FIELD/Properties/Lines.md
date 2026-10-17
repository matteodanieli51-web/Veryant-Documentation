## Lines

This property allows you to specify the height of the Entry-Field control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Entry-Field control is still computed in CELLS, but the cell size is based on the font set for the Entry-Field control with the [Font](./Font) property. If no font has been defined for the Entry-Field control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define an entry-field control defining its dimensions in lines and size

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 29.0
     column 49.5
     size 13.1 cells
     lines 4.6 cells
     id 19
     3-d.
```
