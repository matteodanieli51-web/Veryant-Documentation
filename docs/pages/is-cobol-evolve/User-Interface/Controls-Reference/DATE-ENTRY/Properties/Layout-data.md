## Layout-data

The Layout Manager can use this data to help determine the way to show the control. Each manager forces its own interpretation of the meaning of this data.

This property can have either numeric values (defined in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook) or alphanumeric values, depending on the Layout Manager associated to the window. See [Layout managers](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/Layout-managers) for more information.

**Example -** Define a date-entry control that gets resized in X and Y when the layout-manager requires so

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     layout-data 17
     century-date
     value-format davf-yyyymmdd
     .
```
