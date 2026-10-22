## Bitmap-Trailing

This property defines the bitmap position with respect to the text contained in the cell identified by the [X](./X) and [Y](./Y) properties. When set to 0, the default, the bitmap will be on the left side of the text. When set to 1, it will be on the right side.

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
