## Help-Id

This property allows you to assign a unique ID to the Label control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a label with a help-id

```cobol
screen section.
...
   03 screen-1-la-1 Label
      line 3.5
      column 16.9
      size 26.5 cells
      lines 3.2 cells
      help-id 2020
      id 25
      title "This is the main Title"
      .
```
