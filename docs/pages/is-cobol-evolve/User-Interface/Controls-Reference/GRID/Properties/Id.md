## Id

This property allows you to assign a unique ID to the Grid control.

This is the information the variables *event-control-id* and *control-id* refer to. Both variables are defined in [iscrt.def](../../../../Appendices/Copybooks/iscrt.def).

**Example** - Define a grid with the ID property

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     help-id 5040
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     row-dividers 1
     end-color 9
     num-rows 5
     .
...
```
