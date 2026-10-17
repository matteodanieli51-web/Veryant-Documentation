## Background-Bitmap-Handle

This property identifies the bitmap handle to an image that will be used instead of [Background-Color](./Background-Color). To obtain a bitmap handle use the [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP) library routine with the WBITMAP-LOAD op-code.

If this property points to an animated GIF, then no image is shown.

**Example** - Display a tool-bar with background image

```cobol
working-storage section.
...
77 watermark-jpg pic s9(9) comp-4.
77 screen-1-tb-1-hdl handle of window.
...
procedure division.
...
  display tool-bar
          cell width 10
          cell height 10
          control font Default-Font
          background-bitmap-handle watermark-jpg
          background-bitmap-scale 0
          lines 4.0
          handle screen-1-tb-1-hdl
```
