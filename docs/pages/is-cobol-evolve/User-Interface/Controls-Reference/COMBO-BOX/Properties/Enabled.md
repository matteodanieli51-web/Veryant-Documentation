## Enabled

This property assumes a value of "0" if the Combo-Box control is disabled, "1" if it is enabled.

**Example -** Define a disabled combo-box in screen section and enable it later in procedure division

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.4
   column 23.2
   size 11.9 cells
   lines 11.1
   color 265
   enabled 0
   id 13
   cursor -1
   3-d
   drop-down
   .
...
procedure division.
...
   if enable-combo-box
      modify screen-1-co-1 enabled 1
   end-if
   .
...
```
