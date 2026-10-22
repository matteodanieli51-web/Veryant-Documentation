## Size

This property allows you to specify the size of the Label control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Label control is still computed in CELLS, but the cell size is based on the font set for the Label control with the [Font](./Font) property. If no font has been defined for the Label control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a label with dimensions in lines and size

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     id 25
     title "This is the main Title"
     .
```
