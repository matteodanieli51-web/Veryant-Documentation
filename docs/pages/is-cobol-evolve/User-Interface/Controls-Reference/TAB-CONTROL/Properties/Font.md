## Font

This property specifies the font used to display the content of the Tab-Control control. It may be used to compute the height and the width of the Tab-Control control, as well. See the [Height-In-Cells](../Styles/Height-In-Cells), [Lines](./Lines), [Size](./Size), and [Width-In-Cells](../Styles/Width-In-Cells) properties for further details.

**Example** - Define a tab-control with a particular Font

```cobol
working-storage section.
77 Tahoma-10v00 handle of font.
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     font Tahoma-10v00
     enabled 0
     id 10
     bitmap-width 18
     bitmap-handle icon-png
     .
```
