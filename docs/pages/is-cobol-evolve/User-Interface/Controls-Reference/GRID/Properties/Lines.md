## Lines

This property allows you to specify the height of the Grid control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Grid control is still computed in CELLS, but the cell size is based on the font set for the Grid control with the [Font](./Font) property. If no font has been defined for the Grid control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a grid with height in lines

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     layout-data 17
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     hscroll
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     cursor-frame-width 3
     num-rows 5
     .
...
```
