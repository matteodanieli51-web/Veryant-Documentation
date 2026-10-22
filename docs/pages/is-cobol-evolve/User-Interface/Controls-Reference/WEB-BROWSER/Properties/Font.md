## Font

This property specifies the font that may be used to compute the height and the width of the Web-Browser control. See the [Height-In-Cells](../Styles/Height-In-Cells), [Font](./Font), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a web-browser control with a font to control the size

```cobol
working-storage section.
77 Arial-0v0 handle of font.
...
screen section.
...
          03 screen-1-wb-1 Web-Browser
             line 23.1
             column 2.0
             size 62.2 cells
             lines 25.6 cells
             font Arial-0v0
             id 15
             value "https://www.veryant.com"
             .
...
procedure division.
...
  initialize wfont-data arial-0v0.
  move 0 to wfont-size.
  move "Arial" to wfont-name.
  set wfont-bold to false.
  set wfont-italic to false.
  set wfont-underline to false.
  set wfont-strikeout to false.
  set wfont-fixed-pitch to false.
  call "w$font" using wfont-get-font arial-0v0 wfont-data.
...
```
