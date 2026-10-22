## Help-Id

This property allows you to assign a unique ID to the Tab-Control control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a tab-control with help-id number

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     enabled 0
     help-id 1036
     id 10
     .
```
