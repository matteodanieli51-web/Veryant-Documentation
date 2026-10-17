## Help-Id

This property allows you to assign a unique ID to the Scroll-Bar control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a scroll-bar with help-id

```cobol
screen section.
...
  03 screen-1-sb-1 Scroll-Bar
     line 4.0
     column 41.5
     size 2.9 cells
     lines 39.7 cells
     color 229
     font Calibri-10v00
     help-id 3029
     id 5
     .
...
```
