## Layout-Data

The Layout Manager can use this data to help determine the way to show the control. Each manager forces its own interpretation of the meaning of this data.

This property can have either numeric values (defined in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook) or alphanumeric values, depending on the Layout Manager associated to the window. See [Layout managers](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/Layout-managers) for more information.

**Example -** Define a split-pane in screen section with layout data to resize X and Y from the layout manager when the screen gets resized

```cobol
screen section.
...
03 screen-1-sp-1 Split-pane
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   id 13
   layout-data 17
   .
```
