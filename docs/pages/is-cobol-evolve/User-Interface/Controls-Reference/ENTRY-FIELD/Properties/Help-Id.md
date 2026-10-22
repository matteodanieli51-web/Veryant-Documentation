## Help-Id

This property allows you to assign a unique ID to the Entry-Field control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define an entry-field with a Help-id

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 29.0
     column 49.5
     size 13.1 cells
     lines 4.6 cells
     help-id 3090
     id 19
     3-d.
```
