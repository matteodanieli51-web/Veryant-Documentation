## Lines

This property allows you to specify the height of the Bitmap control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Bitmap control is still computed in CELLS, but the cell size is based on the font set for the Bitmap control with the [Font](./Font) property. If no font has been defined for the Bitmap control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

By default, Bitmap lines are measured in pixels.

**Example -** Define a bitmap whose height is 68 pixels

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.8
     column 33.5
     size 63 pixels
     lines 68 pixels
     id 9
     .
```
