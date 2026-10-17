## Lines

This property allows you to specify the height of the Label control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Label control is still computed in CELLS, but the cell size is based on the font set for the Label control with the [Font](./Font) property. If no font has been defined for the Label control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a label with dimensions in lines and size

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     font Berlin-Sans-FB-9v0
     id 25
     title "This is the main Title"
     .
```
