## Size

This property allows you to specify the size of the Tab-Control control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Tab-Control control is still computed in CELLS, but the cell size is based on the font set for the Tab-Control control with the [Font](./Font) property. If no font has been defined for the Tab-Control control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a tab-control with size

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     id 10
     .
```
