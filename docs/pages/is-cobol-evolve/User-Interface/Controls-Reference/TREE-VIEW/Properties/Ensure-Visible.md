## Ensure-Visible

When set to a valid item, that item is made visible. If necessary, items will be expanded and the content of the control will scroll.

When setting this property while [Mass-Update](./Mass-Update) is "1" there is no guarantee that the items will be expanded. You should set this property only when [Mass-Update](./Mass-Update) is "0".

**Example** - Define a tree-view and ensure one of its subitems is visible all the time

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
     color 144
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
         ensure-visible = tv-item-hdl4
         parent = null
         item-to-add "Option 3"
         giving tv-item-hdl1
         bitmap-number 1
         .
```
