## Lines

This property allows you to specify the height of the Push-Button control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Push-Button control is still computed in CELLS, but the cell size is based on the font set for the Push-Button control with the [Font](./Font) property. If no font has been defined for the Push-Button control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

When the [Bitmap](../Styles/Bitmap) style is set, Lines are measured in pixels.

**Example** - Define a push-button with height in lines

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     title "Disable"
     .
```
