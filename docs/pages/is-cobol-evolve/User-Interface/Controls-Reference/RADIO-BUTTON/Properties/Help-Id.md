## Help-Id

This property allows you to assign a unique ID to the Radio-Button control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a radio button with a help-id

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     help-id 3020
     id 5
     title "Option 2"
     .
```
