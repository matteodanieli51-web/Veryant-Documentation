## Bitmap-Handle

This property identifies the bitmap strip handle to be used. If this value is omitted, the control uses the bitmap most recently loaded by [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP).  The [Bitmap](../Styles/Bitmap) style must be set.

If this property points to an animated GIF, then the Check-Box control renders the animation.

**Example -** Define a checkbox in screen section with its bitmap handle

```cobol
working-storage section.
...
77 my-cb-png pic s9(9) comp-4.
...
screen section.
...
03 screen-1-cb-2 Check-Box
   line 27.0
   column 10.0
   size 116
   lines 31
   id 11
   flat
   title "My Check Box"
   bitmap-handle my-cb-png
   bitmap-number 1
   bitmap-width 20
   title-position 2
   bitmap-selected 2
   .
...
procedure division.
...
  call "w$bitmap" using
        wbitmap-load "my-cb.png" giving my-cb-png.
```
