## Bitmap-Width

This property identifies the width in pixels of the image displayed on the side of the item identified by the [Item](./Item) property. The bitmap strip identified by the [Bitmap-Handle](./Bitmap-Handle) property is divided into several smaller images. The width of each image is the value assigned to this property.

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
