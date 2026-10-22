## Lines

This property allows you to specify the height of the Java-Bean control. If the PIXEL keyword follows the value specified here, the height is computed in pixels. If either the CELLS keyword or the [Height-In-Cells](../Styles/Height-In-Cells) style is specified, the height is computed in cells. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of this property is not followed by any keyword and the [Height-In-Cells](../Styles/Height-In-Cells) style is not set, the height of the Java-Bean control is still computed in CELLS, but the cell size is based on the font set for the Java-Bean control with the [Font](./Font) property. If no font has been defined for the Java-Bean control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a Java-bean with height in lines

```cobol
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     background-color 8
     foreground-color 3
     id 1
     no-box
     .
...
```
