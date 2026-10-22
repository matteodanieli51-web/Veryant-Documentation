## Size

This property allows you to specify the size of the Bitmap control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Bitmap control is still computed in CELLS, but the cell size is based on the font set for the Bitmap control with the [Font](./Font) property. If no font has been defined for the Bitmap control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

By default, Bitmap size is measured in pixels.

**Example -** Define a bitmap with a specific size

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.0
     column 33.0
     size 63 pixels
     lines 68 pixels
     id 9
     .
```
