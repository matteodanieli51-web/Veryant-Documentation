## Id

This property allows you to assign a unique ID to the Bitmap control.

This is the information the variables *event-control-id* and *control-id* refer to. Both variables are defined in [iscrt.def](../../../../Appendices/Copybooks/iscrt.def).

**Example -** Define a bitmap with ID 9

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.8
     column 33.5
     size 63 pixels
     lines 68 pixels
     id 9
     .
```
