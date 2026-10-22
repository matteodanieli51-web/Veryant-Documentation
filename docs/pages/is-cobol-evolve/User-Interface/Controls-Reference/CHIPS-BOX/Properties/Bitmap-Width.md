## Bitmap-Width

This property defines the width in pixels of the image displayed in the chip identified by the [Item](./Item) property. The bitmap strip identified by the [Bitmap](./Bitmap) property is divided into several smaller images. The width of each image is the value assigned to this property.

**Example** - Modify a chip to include a bitmap

```cobol
working-storage section.
77 icon-png pic s9(9) comp-4.
77 wk-item pic 9(2).
...
procedure division.
...
  call "w$bitmap" using wbitmap-load "icon.png"
       giving icon-png.
...
  modify screen-1-chip-1 item = wk-item
         bitmap icon-png
         bitmap-number 3
         bitmap-width 18
         .
...
```
