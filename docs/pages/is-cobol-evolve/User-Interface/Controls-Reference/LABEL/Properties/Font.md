## Font

This property specifies the font used to display the content of the Label control. It may be used to compute the height and the width of the Label control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a label with specific font

```cobol
working-storage section.
...
77 Berlin-Sans-FB-9v0 handle of font.
...
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     font Berlin-Sans-FB-9v0
     id 25
     title "This is the main Title"
     .
...
procedure division.
...
  initialize wfont-data berlin-sans-fb-9v0.
  move 9 to wfont-size.
  move "Berlin Sans FB" to wfont-name.
  set wfont-bold to false.
  set wfont-italic to false.
  set wfont-underline to false.
  set wfont-strikeout to false.
  set wfont-fixed-pitch to false.
  call "w$font" using wfont-get-font berlin-sans-fb-9v0
  wfont-data.
...
```
