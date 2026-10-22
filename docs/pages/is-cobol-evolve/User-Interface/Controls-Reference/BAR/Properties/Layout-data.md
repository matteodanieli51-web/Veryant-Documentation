## Layout-data

The Layout Manager can use this data to help determine the way to show the control. Each manager forces its own interpretation of the meaning of this data.

This property can have either numeric values (defined in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook) or alphanumeric values, depending on the Layout Manager associated to the window. See [Layout managers](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/Layout-managers) for more information.

**Example -** Define a vertical bar, that allows X and Y resizing

```cobol
screen section.
...
  03 screen-1-br-3 Bar
     line 10.0
     column 5.0
     lines 22.0 cells
     id 3
     layout-data 17 |*> To allow X and Y resizing
     .
```
