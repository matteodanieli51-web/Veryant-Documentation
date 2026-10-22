## Font

This property specifies the font used to display the content of the Grid control. It may be used to compute the height and the width of the Grid control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a grid with specific Font

```cobol
working-storage section.
77 Calibri-10v0 handle of font.
...
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     font Calibri-10v0
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     row-dividers 1
     end-color 9
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
*> Prior to display the screen with the grid, load the font in
*> procedure division using w$font
...
```
