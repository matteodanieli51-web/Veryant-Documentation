## Background-Bitmap-Handle

This property identifies the bitmap handle to an image that will be used instead of [Background-Color](./Background-Color). To obtain a bitmap handle use the [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP) library routine with the WBITMAP-LOAD op-code.

If this property points to an animated GIF, then no image is shown.

**Example** - Display a standard window with background image

```cobol
working-storage section.
...
77 watermark-jpg pic s9(9) comp-4.
77 window-handle usage handle of window.
...
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 64.0
          lines 55.8
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          background-bitmap-handle watermark-jpg
          background-bitmap-scale 0
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          handle window-handle
          .
...
```
