## Layout-data

The Layout Manager can use this data to help determine the way to show the control. Each manager forces its own interpretation of the meaning of this data.

This property can have either numeric values (defined in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook) or alphanumeric values, depending on the Layout Manager associated to the window. See [Layout managers](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/Layout-managers) for more information.

**Example -** Define a bitmap with layout-data to resize in X and Y by the layout manager

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.8
     column 33.5
     size 63 pixels
     lines 68 pixels
     id 9
     layout-data 17
     .
```
