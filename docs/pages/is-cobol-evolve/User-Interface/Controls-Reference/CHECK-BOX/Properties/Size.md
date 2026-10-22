## Size

This property allows you to specify the size of the Check-Box control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Check-Box control is still computed in CELLS, but the cell size is based on the font set for the Check-Box control with the [Font](./Font) property. If no font has been defined for the Check-Box control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

If the [Bitmap](../Styles/Bitmap) style is set, Size is measured in pixels by default.

**Example -** Define a check-box with a size

```cobol
screen section.
...
03 screen-1-cb-1 Check-Box
   line 22.0
   column 10.0
   size 11.0 cells
   lines 3.0 cells
   id 10
   .
```
