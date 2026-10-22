## Bitmap

Assigning a bitmap handle to this property indicates that a bitmap is shown in the chip identified by the [Item](./Item) property. The value "0" removes the bitmap from the chip.

**Example** - Apply an image to a chip

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
