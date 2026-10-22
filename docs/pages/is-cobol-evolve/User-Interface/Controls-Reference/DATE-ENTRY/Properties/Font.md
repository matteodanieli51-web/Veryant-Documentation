## Font

This property specifies the font used to display the content of the Date-Entry control. It may be used to compute the height and the width of the Date-Entry control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example -** Define a date-entry control with specific font

```cobol
working-storage section.
copy "isfonts.def".
77 Aharoni-10v0 handle of font.
...
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 12.6 cells
     lines 3.1 cells
     font Aharoni-10v0
     id 17
     century-date
     value-format davf-yyyymmdd
     calendar-font Default-Font
     .
...
procedure division.
...
  initialize wfont-data aharoni-10v0.
  move 10 to wfont-size.
  move "Aharoni" to wfont-name.
  set wfont-bold to false.
  set wfont-italic to false.
  set wfont-underline to false.
  set wfont-strikeout to false.
  set wfont-fixed-pitch to false.
  call "w$font" using wfont-get-font aharoni-10v0 wfont-data.
...
```
