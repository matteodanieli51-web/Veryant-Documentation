## Lines

This property allows you to specify the height of the Slider control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Slider control is still computed in CELLS, but the cell size is based on the font set for the Slider control with the [Font](./Font) property. If no font has been defined for the Slider control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a slide-bar with height in lines

```cobol
screen section.
...
  03 screen-1-sl-2 Slider
     line 39.1
     column 12.8
     size 38.4 cells
     lines 3.8 cells
     id 10
     max-width 100.0
     min-width 40.0
     min-height 5.0
     max-height 20.0
     layout-data 17
     horizontal
     .
```
