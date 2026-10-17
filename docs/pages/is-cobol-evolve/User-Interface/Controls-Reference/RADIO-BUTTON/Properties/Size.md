## Size

This property allows you to specify the size of the Radio-Button control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Radio-Button control is still computed in CELLS, but the cell size is based on the font set for the Radio-Button control with the [Font](./Font) property. If no font has been defined for the Radio-Button control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

When the [Bitmap](../Styles/Bitmap) style is set, Size is measured in pixels.

**Example** - Define a radio button with the width in the size property

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     id 5
     max-width 40.0
     min-width 10.0
     min-height 5.0
     max-height 20.0
     layout-data 17
     title "Option 2"
     .
```
