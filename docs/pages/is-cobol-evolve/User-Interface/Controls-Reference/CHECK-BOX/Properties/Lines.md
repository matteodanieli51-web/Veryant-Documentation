## Lines

This property allows you to specify the height of the Check-Box control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Check-Box control is still computed in CELLS, but the cell size is based on the font set for the Check-Box control with the [Font](./Font) property. If no font has been defined for the Check-Box control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

If the [Bitmap](../Styles/Bitmap) style is set, Lines are measured in pixels by default.

**Example -** Define a check-box with a height in lines

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 156
     lines 31
     id 11
     .
```
