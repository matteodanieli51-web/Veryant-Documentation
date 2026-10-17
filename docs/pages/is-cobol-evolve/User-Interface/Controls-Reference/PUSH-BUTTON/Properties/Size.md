## Size

This property allows you to specify the size of the Push-Button control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Push-Button control is still computed in CELLS, but the cell size is based on the font set for the Push-Button control with the [Font](./Font) property. If no font has been defined for the Push-Button control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

When the [Bitmap](../Styles/Bitmap) style is set, Size is measured in pixels.

**Example** - Define a push-button with the width in the size property

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
