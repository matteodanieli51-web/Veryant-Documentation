## Lines

This property allows you to specify the height of the Tree-View control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Tree-View control is still computed in CELLS, but the cell size is based on the font set for the Tree-View control with the [Font](./Font) property. If no font has been defined for the Tree-View control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a tree-view with height in lines

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
     font Tahoma-10v0
     id 2
     .
```
