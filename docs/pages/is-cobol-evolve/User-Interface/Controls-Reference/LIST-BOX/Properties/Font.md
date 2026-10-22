## Font

This property specifies the font used to display the content of the List-Box control. It may be used to compute the height and the width of the List-Box control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a list-box with specific Font

```cobol
working-storage section.
77 Calibri-10v0 handle of font.
...
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     font Calibri-10v0
     id 1
     .
...
*> Prior to display the screen with the list-box, load the font in
*> procedure division using w$font
...
```
