## Background-Bitmap-Handle

This property identifies the bitmap handle to an image that will be used instead of [Background-Color](./Background-Color). To obtain a bitmap handle use the [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP) library routine with the WBITMAP-LOAD op-code.

If this property points to an animated GIF, then no image is shown.

**Example** - Define a split-pane control with background image

```cobol
working-storage section.
...
77 watermark-jpg pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-sp-1 Split-pane
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     background-bitmap-handle watermark-jpg
     background-bitmap-scale 0
     .
```
