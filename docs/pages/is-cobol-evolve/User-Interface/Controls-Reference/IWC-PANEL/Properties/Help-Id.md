## Help-Id

This property allows you to assign a unique ID to the IWC-Panel control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example -** Define an iwc-panel with a help id

```cobol
screen section.
...
  03 screen-1-ip-1 Iwc-Panel
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     help-id 50
     id 10
     js-name "f-map"
     .
```
