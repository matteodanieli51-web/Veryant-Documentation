## Cell-Font

This property allows you to set or retrieve the font of the cell identified by the [X](./X) and [Y](./Y) properties.When this property is set to zero, the cell inherits the row font.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Set the font of a cell

```cobol
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
  modify screen-1-gr-1 x = 1, y = 2
         bitmap icon-png
         bitmap-number 3
         bitmap-trailing 1
         bitmap-width 18
         cell-color 232
         cell-font Tahoma-10v0
         cell-data "Albert"
         .
...
```
