## Enabled

This property assumes a value of "0" if the Radio-Button control is disabled, "1" if it is enabled.

**Example** - Define a radio button initially disabled and then enable it on procedure division

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     color 133
     enabled 0
     id 5
     title "Option 2"
     .
...
procedure division.
...
  modify screen-1-rb-2 enabled 1
...
```
