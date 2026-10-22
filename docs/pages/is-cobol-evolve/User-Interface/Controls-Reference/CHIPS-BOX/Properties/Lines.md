## Lines

This property allows you to specify the height of the Chips-Box control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Chips-Box control is still computed in CELLS, but the cell size is based on the font set for the Chips-Box control with the [Font](./Font) property. If no font has been defined for the Chips-Box control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example -** Define a chips-box with a height in lines

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 27.0
     column 10.0
     size 156
     lines 31
     id 11
     .
```
