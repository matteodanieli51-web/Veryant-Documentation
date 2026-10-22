## Help-Id

This property allows you to assign a unique ID to the Tree-View control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a tree-view with help-id

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     help-id 4433
     id 2
     no-box
     .
```
