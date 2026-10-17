## Id

This property allows you to assign a unique ID to the Check-Box control.

This is the information the variables *event-control-id* and *control-id* refer to. Both variables are defined in [iscrt.def](../../../../Appendices/Copybooks/iscrt.def).

**Example -** Define a check-box with a specific Id

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 156
     lines 31
     id 11
     .
```
