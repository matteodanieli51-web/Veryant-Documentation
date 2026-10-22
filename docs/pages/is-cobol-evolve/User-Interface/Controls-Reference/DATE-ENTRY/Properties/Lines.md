## Lines

This property allows you to specify the height of the Date-Entry control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Date-Entry control is still computed in CELLS, but the cell size is based on the font set for the Date-Entry control with the [Font](./Font) property. If no font has been defined for the Date-Entry control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example -** Defined a date-entry in screen section especifying its height in lines

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   id 13
   3-d
   drop-down
   .
```
