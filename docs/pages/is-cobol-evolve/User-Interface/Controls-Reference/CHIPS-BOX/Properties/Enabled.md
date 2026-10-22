## Enabled

This property assumes a value of "0" if the Chips-Box control is disabled, "1" if it is enabled.

**Example -** Define a chips-box in screen section, initially disabled and then enable it in procedure division

```cobol
working-storage section.
...
01 filler pic 9 value 0.
   88 enable-chips value 1 false 0.

screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     enabled 0
     id 10
     .
...
procedure division.
...
  if enable-chips
     modify screen-1-chip-1 enabled 1
  end-if.
...
```
