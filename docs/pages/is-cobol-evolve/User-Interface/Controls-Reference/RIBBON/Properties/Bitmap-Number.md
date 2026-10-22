## Bitmap-Number

This property defines which image among the ones in the bitmap strip referenced by the [Bitmap-Handle](./Bitmap-Handle) property is to be displayed in the page identified by the [Tab-Index](./Tab-Index) property.

When the values are enclosed between parentheses, the [Tab-Index](./Tab-Index) property is ignored, the 1st value refers to the 1st Tab, the 2nd value refers to the 2nd Tab and so on.

**Example** - Display a Ribbon control with bitmaps on the page titles

```cobol
working-storage section.
77 screen-1-rbn-1-hdl handle of ribbon.
77 icon-png pic s9(9) comp-4.
...
procedure division.
...
  call "w$bitmap" using wbitmap-load "icon.png" giving
       icon-png.
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 1 2)
          lines 4.4375
          color 134
          id 6
          collapse 1
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
