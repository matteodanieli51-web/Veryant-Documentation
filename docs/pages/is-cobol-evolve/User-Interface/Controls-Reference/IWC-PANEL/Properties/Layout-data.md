## Layout-data

The Layout Manager can use this data to help determine the way to show the control. Each manager forces its own interpretation of the meaning of this data.

This property can have either numeric values (defined in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook) or alphanumeric values, depending on the Layout Manager associated to the window. See [Layout managers](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/Layout-managers) for more information.

**Example** - Define an iwc-panel grid that allows resize in X and Y when the layout manager requires so

```cobol
screen section.
...
  03 screen-1-ip-1 Iwc-Panel
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     id 10
     js-name "f-map"
     layout-data 17
     .
...
```
