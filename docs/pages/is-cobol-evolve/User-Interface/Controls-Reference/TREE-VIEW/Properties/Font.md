## Font

This property specifies the font used to display the content of the Tree-View control. It may be used to compute the height and the width of the Tree-View control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a tree-view with special font

```cobol
working-storage section.
77 Tahoma-10v0 handle of font.
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     font Tahoma-10v0
     id 2
     no-box
     .
...
procedure division.
...
  initialize wfont-data tahoma-10v0.
  move 10 to wfont-size.
  move "Tahoma" to wfont-name.
  set wfont-bold to false.
  set wfont-italic to false.
  set wfont-underline to false.
  set wfont-strikeout to false.
  set wfont-fixed-pitch to false.
  call "w$font" using wfont-get-font tahoma-10v0 wfont-data.
...
```
