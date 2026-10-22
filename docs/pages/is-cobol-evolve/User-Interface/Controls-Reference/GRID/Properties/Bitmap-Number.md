## Bitmap-Number

This property defines which bitmap (among the ones in the bitmap strip referenced by the [Bitmap](./Bitmap) property) is to be displayed in the cell identified by the [X](./X) and [Y](./Y) properties.

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
