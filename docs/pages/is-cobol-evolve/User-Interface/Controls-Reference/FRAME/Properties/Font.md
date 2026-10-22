## Font

This property specifies the font used to display the content of the Frame control. It may be used to compute the height and the width of the Frame control as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a frame control with a font to determine its size

```cobol
working-storage section.
copy "isfonts.def".
77 Arial-12v0 handle of font.
...
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     color 6
     font Arial-12v0
     id 16
     .
...
procedure division.
...
  initialize wfont-data arial-12v0.
  move 12 to wfont-size.
  move "Arial" to wfont-name.
  set wfont-bold to false.
  set wfont-italic to false.
  set wfont-underline to false.
  set wfont-strikeout to false.
  set wfont-fixed-pitch to false.
  call "w$font" using wfont-get-font arial-12v0 wfont-data.
...
```
