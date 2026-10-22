## Font

This property specifies the font used to display the content of the Entry-Field control. It may be used to compute the height and the width of the Entry-Field control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define an entry-field control with Verdana font

```cobol
working-storage section.
copy "isfonts.def".
77 Verdana-10v0 handle of font.
...
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 29.0
     column 49.5
     size 13.1 cells
     lines 4.6 cells
     font Verdana-10v0
     id 19
     3-d
     .
...
procedure division.
...
  initialize wfont-data verdana-10v0.
  move 10 to wfont-size.
  move "Verdana" to wfont-name.
  set wfont-bold to false.
  set wfont-italic to false.
  set wfont-underline to false.
  set wfont-strikeout to false.
  set wfont-fixed-pitch to false.
  call "w$font" using wfont-get-font verdana-10v0 wfont-data.
...
```
