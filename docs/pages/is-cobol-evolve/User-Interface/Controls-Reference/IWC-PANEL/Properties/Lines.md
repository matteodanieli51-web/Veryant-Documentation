## Lines

This property allows you to specify the height of the IWC-Panel control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the IWC-Panel control is still computed in CELLS, but the cell size is based on the font set for the IWC-Panel control with the [Font](../../JAVA-BEAN/Properties/Font) property. If no font has been defined for the IWC-Panel control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define an iwc-panel with height in lines

```cobol
screen section.
...
  03 screen-1-ip-1 iwc-panel
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     background-color 8
     foreground-color 3
     id 1
     js-name "f-map"
     .
...
```
