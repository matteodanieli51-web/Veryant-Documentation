## Bitmap-Handle

This property identifies the bitmap strip handle to be used in the Tab-Control.

If this property points to an animated GIF, then the tab renders the animation.

**Example** - Define a tab-control with a bitmap

```cobol
working-storage section.
77 icon-png pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     background-color 7
     foreground-color 3
     id 10
     bitmap-width 18
     bitmap-handle icon-png
     .
  03 screen-1-tp-1 visible screen-1-tp-1-vis.
     05 screen-1-ef-1 Entry-Field
        line 10.7
        column 35.6
        size 12.3 cells
        lines 5.3 cells
        id 11
        3-d
        .
     05 screen-1-pb-9 Push-Button
        line 17.7
        column 35.4
        size 12.7 cells
        lines 4.4 cells
        id 12
        title "Push-Button"
        .
  03 screen-1-tp-2 visible screen-1-tp-2-vis.
     05 screen-1-ef-2 Entry-Field
        line 11.8
        column 35.1
        size 15.3 cells
        lines 4.8 cells
        id 13
        3-d
        .
     05 screen-1-pb-10 Push-Button
        line 19.5
        column 35.0
        size 15.6 cells
        lines 5.0 cells
        id 14
        title "Push-Button"
        .
```
