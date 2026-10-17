## Font

This property specifies the font used to display the content of the Push-Button control. It may be used to compute the height and the width of the Push-Button control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a push-button to use a particular font

```cobol
working-storage section.
77 Calibri-10v0 handle of font.
...
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     font Calibri-10v0
     id 2
     title "Accept"
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
```
