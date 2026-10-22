## Lines

This property allows you to specify the height of the Tab-Control control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Tab-Control control is still computed in CELLS, but the cell size is based on the font set for the Tab-Control control with the [Font](./Font) property. If no font has been defined for the Tab-Control control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a tab-control with height in lines

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     help-id 1036
     id 10
     layout-data 17
     .
```
