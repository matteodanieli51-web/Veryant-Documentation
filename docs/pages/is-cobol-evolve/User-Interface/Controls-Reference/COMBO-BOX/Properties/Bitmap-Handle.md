## Bitmap-Handle

This property identifies the bitmap strip handle to be used.

If this property points to an animated GIF, the  [Drop-Down](../Styles/Drop-Down-Drop-List-Static-List) combo renders the animation, while the  [Drop-List](../Styles/Drop-Down-Drop-List-Static-List) combo shows the first frame of the animation.

**Example -** Define a combo-box that uses bitmap images for the items

```cobol
working-storage section.
...
77 icon-png pic s9(9) comp-4.
...
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.4
   column 23.2
   size 11.9 cells
   lines 11.1
   id 13
   3-d
   drop-down
   bitmap-width 20
   bitmap-handle icon-png
   .
...
procedure division.
...
   *> Load the bitmap to a handle
   call "w$bitmap"
        using wbitmap-load "icon.png" giving icon-png.
...
   *> Add 3 items and assign a bitmap image to each
   modify screen-1-co-1 item-to-add ("Blue", "Cyan", "Green")
   modify screen-1-co-1(1) bitmap-number 20
   modify screen-1-co-1(2) bitmap-number 16
   modify screen-1-co-1(3) bitmap-number 17.
...
```
