## Size

This property allows you to specify the size of the List-Box control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the List-Box control is still computed in CELLS, but the cell size is based on the font set for the List-Box control with the [Font](./Font) property. If no font has been defined for the List-Box control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a list-box with size

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     .
...
```
