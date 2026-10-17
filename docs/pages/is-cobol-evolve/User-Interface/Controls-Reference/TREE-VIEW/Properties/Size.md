## Size

This property allows you to specify the size of the Tree-View control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Tree-View control is still computed in CELLS, but the cell size is based on the font set for the Tree-View control with the [Font](./Font) property. If no font has been defined for the Tree-View control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a tree-view with size

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     id 2
     .
```
