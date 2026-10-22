## Size

This property allows you to specify the size of the Bar control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Bar control is still computed in CELLS, but the cell size is based on the font set for the Bar control with the [Font](./Font) property. If no font has been defined for the Bar control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example -** Define a horizontal bar on screen section with size 46.0 cells

```cobol
screen section.
...
  03 screen-1-br-2 Bar
     line 5.0
     column 12.0
     size 46.0 cells
     id 2
     .
```
