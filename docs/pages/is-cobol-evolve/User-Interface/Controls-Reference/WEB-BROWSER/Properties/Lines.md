## Lines

This property allows you to specify the height of the Web-Browser control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Web-Browser control is still computed in CELLS, but the cell size is based on the font set for the Web-Browser control with the [Font](./Font) property. If no font has been defined for the Web-Browser control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a web-browser with size in LINES

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 25.6 cells
     help-id 2043
     id 15
     value "https://www.yahoo.com"
     .
```
