## Background-Bitmap-Handle

This property identifies the bitmap handle to an image that will be used instead of [Background-Color](./Background-Color). To obtain a bitmap handle use the [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP) library routine with the WBITMAP-LOAD op-code.

If this property points to an animated GIF, then no image is shown.

**Example** - Display a ribbon control with background image

```cobol
working-storage section.
77 screen-1-rbn-1-hdl  handle of ribbon.
77 watermark-jpg pic s9(9) comp-4.
...
procedure division.
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 0 0)
          lines 4.4375
          background-bitmap-handle watermark-jpg
          background-bitmap-scale 0
          id 6
          bitmap-width 16
          handle screen-1-rbn-1-hdl
          .
...
```
