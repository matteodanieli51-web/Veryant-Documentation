## Size

This property allows you to specify the size of the Split-Pane control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Split-Pane control is still computed in CELLS, but the cell size is based on the font set for the Split-Pane control with the [Font](../../STATUS-BAR/Properties/Font) property. If no font has been defined for the Scroll-Pane control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a split pane with the size property

```cobol
screen section.
...
  03 screen-1-sp-2 Split-pane
     line 39.1
     column 12.8
     size 38.4 cells
     lines 3.8 cells
```
