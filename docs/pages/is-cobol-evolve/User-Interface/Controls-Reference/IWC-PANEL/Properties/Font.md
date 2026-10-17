## Font

This property specifies the font that may be used to compute the height and the width of the IWC-Panel control. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example -** Define an iwc-panel control with a font to determine its size

```cobol
working-storage section.
copy "isfonts.def".
77 Arial-0v0   handle of font.
...

screen section.
...
03 screen-1-ip-3 Iwc-Panel
   line 15.8
   column 33.5
   size 13 cells
   lines 18 cells
   font Arial-0v00
   id 9
   js-name "f-map"
   .
...
procedure division.
...
is-load-fonts.
   initialize wfont-data arial-0v0.
   move 10 to wfont-size.
   move "Arial" to wfont-name.
   set wfont-bold to false.
   set wfont-italic to false.
   set wfont-underline to false.
   set wfont-strikeout to false.
   set wfont-fixed-pitch to false.
   call "w$font" using wfont-get-font arial-0v0 wfont-data.
...
```
