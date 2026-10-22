## Background-Bitmap-Handle

This property identifies the bitmap handle to an image that will be used instead of [Background-Color](./Background-Color). To obtain a bitmap handle use the [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP) library routine with the WBITMAP-LOAD op-code.

The image is not shown on Tree-View with the [Table-View](../Styles/Table-View) style.

If this property points to an animated GIF, then the first frame of the animation is shown.

**Example** - Define a tree-view control with background image

```cobol
working-storage section.
...
77 watermark-jpg pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     background-bitmap-handle watermark-jpg
     background-bitmap-scale 0
    .
```
