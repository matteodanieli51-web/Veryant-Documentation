## Font

This property specifies the font used to display the content of the Java-Bean control. It may be used to compute the height and the width of the Java-Bean control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a Java-bean with font property

```cobol
working-storage section.
77 Calibri-10v0 handle of font.
...
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     background-color 8
     foreground-color 3
     font Calibri-10v0
     id 1
     no-box
     bitmap-width 18
     .
...
*> Load the font to Calibri-10v0 handle in procedure division using w$font
...
```
