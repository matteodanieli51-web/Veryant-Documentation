## Bitmap

Assigning a bitmap handle to this property indicates that a bitmap is shown in the cell identified by the [X](./X) and [Y](./Y) properties. The value "0" removes the bitmap from the cell.

If this property points to an animated GIF, then the first frame of the animation is shown.

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
         .
...
```
