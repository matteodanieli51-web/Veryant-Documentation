## Lines

This property allows you to specify the height of the Frame control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Frame control is still computed in CELLS, but the cell size is based on the font set for the Frame control with the [Font](./Font) property. If no font has been defined for the Frame control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a frame control defining its height in lines

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     id 16
     .
```
