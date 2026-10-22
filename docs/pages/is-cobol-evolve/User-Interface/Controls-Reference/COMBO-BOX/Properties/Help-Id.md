## Help-Id

This property allows you to assign a unique ID to the Combo-Box control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example -** Define a combo-box in screen section with help-id

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   foreground-color 3
   help-id 510
   id 13
   3-d
   drop-down
   .
```
