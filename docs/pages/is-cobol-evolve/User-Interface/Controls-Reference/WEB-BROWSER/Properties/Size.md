## Size

This property allows you to specify the size of the Web-Browser control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Web-Browser control is still computed in CELLS, but the cell size is based on the font set for the Web-Browser control with the [Font](./Font) property. If no font has been defined for the Web-Browser control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a web-browser control and set its size

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 28.0 cells
     id 15
     event-list ( cmd-goto cmd-help )
     exclude-event-list 1
     value "https://www.veryant.com"
     .
```
