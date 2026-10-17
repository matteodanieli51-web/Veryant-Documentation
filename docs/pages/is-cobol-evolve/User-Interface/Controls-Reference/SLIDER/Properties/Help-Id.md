## Help-Id

This property allows you to assign a unique ID to the Slider control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a slide-bar with help-id

```cobol
screen section.
...
  03 screen-1-sl-1 Slider
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     help-id 7002
     id 9
     horizontal
     .
```
