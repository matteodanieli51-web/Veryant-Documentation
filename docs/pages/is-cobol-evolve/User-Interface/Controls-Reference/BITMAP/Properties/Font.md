## Font

This property specifies the font that may be used to compute the height and the width of the Bitmap control. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example -** Define a bitmap using an Arial font handle as the font reference for sizing it

```cobol
working-storage section.
copy "isfonts.def".
77 Arial-0v0   handle of font.
77 jlogo-jpg0  pic s9(9) comp-4.
...

screen section.
...
03 screen-1-bi-3 Bitmap
   line 15.8
   column 33.5
   size 63 pixels
   lines 68 pixels
   font Arial-0v00
   id 9
   bitmap-scale 1
   bitmap-handle jlogo-jpg0
   bitmap-number 1
   .
...
procedure division.
...
is-load-fonts.
   initialize wfont-data arial-0v0.
   move 0 to wfont-size.
   move "Arial" to wfont-name.
   set wfont-bold to false.
   set wfont-italic to false.
   set wfont-underline to false.
   set wfont-strikeout to false.
   set wfont-fixed-pitch to false.
   call "w$font" using wfont-get-font arial-0v0 wfont-data.
...
```
