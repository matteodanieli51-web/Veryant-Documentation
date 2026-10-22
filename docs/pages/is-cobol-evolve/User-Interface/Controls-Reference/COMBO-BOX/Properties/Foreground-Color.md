## Foreground-Color

This property allows you to set or retrieve the foreground color of the Combo-Box control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a combo-box in screen section with dark cyan foreground color

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   foreground-color 3
   id 13
   3-d
   drop-down
   .
```
