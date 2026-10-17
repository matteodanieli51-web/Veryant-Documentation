## Enabled

This property assumes a value of "0" if the Push-Button control is disabled, "1" if it is enabled.

**Example** - Define a disabled push-button and enable it in procedure division

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     enabled 0
     title "Accept"
     .
...
procedure division.
...
   modify screen-1-pb-2 enabled 1
...
```
