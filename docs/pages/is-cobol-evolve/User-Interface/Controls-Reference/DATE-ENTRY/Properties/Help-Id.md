## Help-Id

This property allows you to assign a unique ID to the Date-Entry control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example -** Define a date-entry control with a Help-id

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 12.6 cells
     lines 3.1 cells
     help-id 4040
     id 17
     century-date
     value-format davf-yyyymmdd
     .
```
