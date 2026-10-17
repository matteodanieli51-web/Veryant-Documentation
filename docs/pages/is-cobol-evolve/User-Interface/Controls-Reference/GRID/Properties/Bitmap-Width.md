## Bitmap-Width

This property defines the width in pixels of the image displayed in the cell identified by the [X](./X) and [Y](./Y) properties. The bitmap strip identified by the [Bitmap](./Bitmap) property is divided into several smaller images. The width of each image is the value assigned to this property.

**Example** - Modify a grid to include a bitmap on one cell

```cobol
working-storage section.
77 icon-png pic s9(9) comp-4.
...
procedure division.
...
  call "w$bitmap" using wbitmap-load "icon.png"
       giving icon-png.
...
  modify screen-1-gr-1 x = 1, y = 2
         bitmap icon-png
         bitmap-number 3
         bitmap-trailing 1
         bitmap-width 18
         cell-data "Albert"
         ....
```
