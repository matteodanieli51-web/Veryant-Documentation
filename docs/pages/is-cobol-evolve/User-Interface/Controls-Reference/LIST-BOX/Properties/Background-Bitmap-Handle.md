## Background-Bitmap-Handle

This property identifies the bitmap handle to an image that will be used instead of [Background-Color](./Background-Color). To obtain a bitmap handle use the [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP) library routine with the WBITMAP-LOAD op-code.

If this property points to an animated GIF, then the first frame of the animation is shown.

**Example** - Define a list-box control with background image

```cobol
working-storage section.
...
77 watermark-jpg pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-lb-1 List-Box
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     background-bitmap-handle watermark-jpg
     background-bitmap-scale 0
     id 1
     .
```
