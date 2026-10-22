## Help-Id

This property allows you to assign a unique ID to the Push-Button control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a push-button with a help-id

```cobol
screen section.
...
  03 screen-1-pb-1 Push-Button
     line 4.5
     column 8.1
     size 12.5 cells
     lines 4.8 cells
     help-id 5002
     id 1
     title "Accept"
     .
```
