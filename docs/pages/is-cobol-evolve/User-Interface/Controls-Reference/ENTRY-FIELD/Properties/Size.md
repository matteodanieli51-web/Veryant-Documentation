## Size

This property allows you to specify the size of the Entry-Field control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Entry-Field control is still computed in CELLS, but the cell size is based on the font set for the Entry-Field control with the [Font](./Font) property. If no font has been defined for the Entry-Field control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

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
