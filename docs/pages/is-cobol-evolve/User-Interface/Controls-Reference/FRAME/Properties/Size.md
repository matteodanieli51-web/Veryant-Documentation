## Size

This property allows you to specify the size of the Frame control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Frame control is still computed in CELLS, but the cell size is based on the font set for the Frame control with the [Font](./Font) property. If no font has been defined for the Frame control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a frame control with size in cells

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     font Arial-12v0
     id 16
     .
```
