## Id

This property allows you to assign a unique ID to the Split-Pane control.

This is the information the variables *event-control-id* and *control-id* refer to. Both variables are defined in [iscrt.def](../../../../Appendices/Copybooks/iscrt.def).

**Example** - Define a split pane with an ID property

```cobol
screen section.
...
  03 screen-1-sp-1 Split-pane
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     color 135
     id 9
     .
```
