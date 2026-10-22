## Help-Id

This property allows you to assign a unique ID to the List-Box control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a lisb-box with help id

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     font Calibri-10v0
     help-id 5040
     id 1
     .
...
```
