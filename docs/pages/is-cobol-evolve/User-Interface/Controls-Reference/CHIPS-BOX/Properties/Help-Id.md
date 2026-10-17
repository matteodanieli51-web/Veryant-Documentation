## Help-Id

This property allows you to assign a unique ID to the Chips-Box control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example -** Define a chips-box with a help id

```cobol
screen section.
...
  03 screen-1-chips-1 Chips-Box
     line 27.0
     column 10.0
     size 156
     lines 31
     help-id 50
     id 11
     .
```
