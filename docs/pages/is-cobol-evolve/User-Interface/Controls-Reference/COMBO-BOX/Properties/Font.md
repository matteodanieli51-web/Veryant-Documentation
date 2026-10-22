## Font

This property specifies the font used to display the content of the Combo-Box control. It may be used to compute the height and the width of the Combo-Box control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example -** Define a combo-box in screen section with font Tahoma

```cobol
working-storage section.
...
copy "isfonts.def".
77 Tahoma-8v0 handle of font.
...
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.4
   column 23.2
   size 11.9 cells
   lines 11.1
   font Tahoma-8v0
   id 13
   .
...
procedure division.
...
  initialize wfont-data tahoma-8v0.
  move 8 to wfont-size.
  move "Tahoma" to wfont-name.
  set wfont-bold to false.
  set wfont-italic to false.
  set wfont-underline to false.
  set wfont-strikeout to false.
  set wfont-fixed-pitch to false.
  call "w$font" using wfont-get-font tahoma-8v0 wfont-data.
```
