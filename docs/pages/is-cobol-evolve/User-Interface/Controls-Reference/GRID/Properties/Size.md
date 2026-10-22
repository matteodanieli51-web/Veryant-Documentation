## Size

This property allows you to specify the size of the Grid control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Grid control is still computed in CELLS, but the cell size is based on the font set for the Grid control with the [Font](./Font) property. If no font has been defined for the Grid control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a grid with size

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     hscroll
     row-headings
     lm-on-columns 1
     row-dividers 1
     end-color 9
     cursor-frame-width 3
     num-rows 5
     .
...
```
