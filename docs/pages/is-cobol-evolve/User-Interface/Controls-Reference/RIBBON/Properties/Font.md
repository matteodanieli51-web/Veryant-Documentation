## Font

This property specifies the font that may be used to compute the height and the width of the Ribbon control. See the [Height-In-Cells](../Styles/Height-In-Cells) and [Lines](./Lines).

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Display a ribbon with custom font

```cobol
working-storage section.
77 Calibri-10v00 handle of font.
...
procedure division.
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 0 0)
          lines 4.4375
          color 134
          id 6
          bitmap-width 16
          font Calibri-10v00
          handle screen-1-rbn-1-hdl
          .
...
*> Before displaying the screen with the ribbon, load the font to
*> Calibri-10v00 using w$font in procedure division
```
