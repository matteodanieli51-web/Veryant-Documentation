## Font

This property specifies the font that may be used to compute the height and the width of the Bar control. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example -** Define a bar using an Arial font handle as the font reference for sizing it

```cobol
working-storage section.
copy "isfonts.def".
77 Arial-0v0 handle of font.
...

screen section.
...
  03 screen-1-br-2 Bar
     line 7.6
     column 4.9
     size 49.4 cells
     font Arial-0v0
     id 2
     shading(-2,0,0,2,2)
     width 5
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
```
