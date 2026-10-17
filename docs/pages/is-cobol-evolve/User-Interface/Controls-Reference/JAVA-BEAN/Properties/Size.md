## Size

This property allows you to specify the size of the Java-Bean control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Java-Bean control is still computed in CELLS, but the cell size is based on the font set for the Java-Bean control with the [Font](./Font) property. If no font has been defined for the Java-Bean control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example** - Define a Java-bean with Size property

```cobol
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     id 1
     no-box
     .
...
```
