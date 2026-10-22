## Bitmap-Width

This property defines the width in pixels of the image displayed on the Tab identified by the [Tab-Index](./Tab-Index) property. The bitmap strip identified by the [Bitmap-Handle](./Bitmap-Handle) property is divided into several smaller images. The width of each image is the value assigned to this property.

When values are enclosed between parentheses, the [Tab-Index](./Tab-Index) property is ignored, the 1st value refers to the 1st Tab, the 2nd value refers to the 2nd Tab and so on.

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
