## Font

This property specifies the font used to display the content of the Radio-Button control. It may be used to compute the height and the width of the Radio-Button control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a radio button with particular font

```cobol
working-storage section.
...
77 Calibri-10v00 handle of font.
...
screen section.
...
  03 screen-1-rb-2 Radio-Button
     exception-value 4001
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     font Calibri-10v00
     id 5
     title "Option 2"
     .
...
procedure division.
...
  initialize wfont-data calibri-10v0.
  move 10 to wfont-size.
  move "Calibri" to wfont-name.
  set wfont-bold to false.
  set wfont-italic to false.
  set wfont-underline to false.
  set wfont-strikeout to false.
  set wfont-fixed-pitch to false.
  call "w$font" using wfont-get-font calibri-10v0 wfont-data.
  move calibri-10v0 to calibri-10v00.
...
```
