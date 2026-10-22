## Font

This property specifies the font that may be used to compute the height and the width of the Split-Pane control. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a split pane with font for sizing reference

```cobol
working-storage section.
77 Calibri-10v00 handle of font.
...
screen section.
...
  03 screen-1-sp-1 Split-pane
     line 4.0
     column 41.5
     size 2.9 cells
     lines 39.7 cells
     font Calibri-10v00
     .
...
*> Before displaying the screen with the split pane, load the font to
*> Calibri-10v00 using w$font in procedure division
```
