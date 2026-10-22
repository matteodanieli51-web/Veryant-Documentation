## Lines

This property allows you to specify the height of the Ribbon control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Ribbon control is still computed in CELLS, but the cell size is based on the font set for the Ribbon control with the [Font](./Font) property. If no font has been defined for the Ribbon control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Display a Ribbon control with height in lines

```cobol
procedure division.
...
  display ribbon
          tab-to-add ( "Ops 1" "Ops 2")
          bitmap-number ( 0 0)
          lines 4.4375
          color 134
          enabled 0
          id 6
          hint "Ribbon tool bar"
          collapse 1
          header-align 1
          layout-manager lm-resize
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
