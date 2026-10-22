## Bitmap-Number

This property defines which bitmap (among the ones in the bitmap strip referenced by the [Bitmap](./Bitmap) property) is to be displayed in the chip identified by the [Item](./Item) property.

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
