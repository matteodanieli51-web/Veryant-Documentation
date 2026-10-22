## Bitmap-Trailing

This property defines the bitmap position with respect to the Item-Text in the column identified by the [X](./X) property. When set to 0, the default, the bitmap will be on the left side of the text. When set to 1, it will be on the right side.

This property has effect only when the [Table-View](../Styles/Table-View) style is set.

**Example** - Add a new item to a table view having the icon placed after the item text

```cobol
working-storage section.
77 app-png pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     Table-View
     display-columns (1, 10)
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     background-color 6
     foreground-color 7
     id 2
     no-box
     bitmap-handle app-png
     bitmap-width 20
     .
...
procedure division.
...
  call "w$bitmap" using wbitmap-load "app.png" giving app-png.
...
  modify screen-1-tv-1
         parent = null
         item-to-add "Option 1"
         giving tv-item-hdl
         bitmap-number 1
         bitmap-trailing 1
         .
...
```
