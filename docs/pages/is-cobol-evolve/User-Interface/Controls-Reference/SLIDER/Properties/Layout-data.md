## Layout-data

The Layout Manager can use this data to help determine the way to show the control. Each manager forces its own interpretation of the meaning of this data.

This property can have either numeric values (defined in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook) or alphanumeric values, depending on the Layout Manager associated to the window. See [Layout managers](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/Layout-managers) for more information.

**Example** - Define a slide-bar with layout data to resize on X and Y when the layout manager requires and with maximum and minimum size in width and height

```cobol
screen section.
...
  03 screen-1-sl-2 Slider
     line 39.1
     column 12.8
     size 38.4 cells
     lines 3.8 cells
     id 10
     max-width 100.0
     min-width 40.0
     min-height 5.0
     max-height 20.0
     layout-data 17
     horizontal
     .
```
