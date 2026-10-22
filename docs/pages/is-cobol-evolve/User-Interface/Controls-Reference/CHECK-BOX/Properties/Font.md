## Font

This property specifies the font used to display the content of the Check-Box control. It may be used to compute the height and the width of the Check-Box control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example -** Define a check-box in screen section with specific font

```cobol
working-storage section.
...
77 Courier-New-0v0 handle of font.
...
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.7
     column 10.6
     size 156
     lines 31
     font Courier-New-0v0
     id 11
     .
...
procedure division.
...
  initialize wfont-data courier-new-0v0.
  move 0 to wfont-size.
  move "Courier New" to wfont-name.
  set wfont-bold to false.
  set wfont-italic to false.
  set wfont-underline to false.
  set wfont-strikeout to false.
  set wfont-fixed-pitch to false.
  call "w$font" using wfont-get-font courier-new-0v0
  wfont-data.
...
```
