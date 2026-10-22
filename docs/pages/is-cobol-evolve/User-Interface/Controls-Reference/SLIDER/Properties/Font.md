## Font

This property specifies the font used to display the content of the Slider control. It may be used to compute the height and the width of the Slider control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a slide-bar with a particular font

```cobol
working-storage section.
77 Tahoma-10v00 handle of font.
...
screen section.
...
  03 screen-1-sl-1 Slider
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     font Tahoma-10v00
     .
```
