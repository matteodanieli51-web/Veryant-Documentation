## Background-Bitmap-Handle

This property identifies the bitmap handle to an image that will be used instead of [Background-Color](./Background-Color). To obtain a bitmap handle use the [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP) library routine with the WBITMAP-LOAD op-code.

If this property points to an animated GIF, then no image is shown.

**Example** - Define a tab control with background image

```cobol
working-storage section.
...
77 watermark-jpg pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     tab-flat
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     background-bitmap-handle watermark-jpg
     background-bitmap-scale 0
     id 10
     .
```
