## Bitmap-Handle

This property identifies the bitmap handle to be used. To obtain a bitmap handle use the [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP) library routine with the WBITMAP-LOAD op-code. If this value is omitted, the control uses the bitmap most recently loaded by [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP).

If this property points to an animated GIF, then the Bitmap control renders the animation.

**Example -** Define a bitmap control with a handle that is set in procedure division

```cobol
working-storage section.
...
77 jlogo-jpg pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-bi-1 Bitmap
     line 10.0
     column 48.0
     size 130 pixels
     lines 150 pixels
     id 5
     bitmap-scale 1
     bitmap-handle jlogo-jpg
     bitmap-number 1
     .
...
procedure division.
...
is-load-bitmaps.
   call "w$bitmap"
        using  wbitmap-load "jlogo.jpg"
        giving jlogo-jpg.
```
