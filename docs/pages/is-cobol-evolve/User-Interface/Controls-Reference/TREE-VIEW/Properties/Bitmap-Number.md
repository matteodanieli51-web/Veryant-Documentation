## Bitmap-Number

This property identifies which bitmap (among the ones in the bitmap strip referenced by the [Bitmap-Handle](./Bitmap-Handle) property) is to be displayed in the item identified by the [Item](./Item) property.

In the standard Tree-View the bitmap is always displayed between the button and the item text.

When the [Table-View](../Styles/Table-View) style is set, instead, the position of the bitmap is controlled by the [X](./X) property and by the [Bitmap-Trailing](./Bitmap-Trailing) property as follows:

- if the [X](./X) property is set, the bitmap is displayed in the column identified by the [X](./X) property, otherwise it’s displayed in the first column,
- if the [Bitmap-Trailing](./Bitmap-Trailing) property is set to 1, the bitmap is displayed after the item text. If the [Bitmap-Trailing](./Bitmap-Trailing) property is set to 0 or omitted, the bitmap is displayed before the item text.

**Example** - Define a tree-view that uses bitmaps for the item icons

```cobol
working-storage section.
77 app-png pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-tv-1 Tree-View
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
         parent = tv-item-hdl
         item-to-add "Sub-option 1.1"
         giving tv-item-hdl2
         bitmap-number 2
         parent = tv-item-hdl
         item-to-add "Sub-option 1.2"
         giving tv-item-hdl3
         bitmap-number 2
         parent = null
         item-to-add "Option 2"
         giving tv-item-hdl0
         bitmap-number 1
         parent = tv-item-hdl0
         item-to-add "Sub-option 2.1"
         giving tv-item-hdl4
         bitmap-number 2
         parent = null
         item-to-add "Option 3"
         giving tv-item-hdl1
         bitmap-number 1
         .
...
```
