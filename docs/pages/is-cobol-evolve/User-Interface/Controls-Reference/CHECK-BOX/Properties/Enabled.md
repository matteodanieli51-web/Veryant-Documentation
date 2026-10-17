## Enabled

This property assumes a value of "0" if the Check-Box control is disabled, "1" if it is enabled.

**Example -** Define a check-box in screen section, initially disabled and then enable it in procedure division

```cobol
working-storage section.
...
01 filler pic 9 value 0.
   88 drinking-coffee value 1 false 0.

screen section.
...
  03 screen-1-cb-1 Check-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     enabled 0
     id 10
     title "Sugar with the coffee?"
     .
...
procedure division.
...
  if drinking-coffee
     modify screen-1-cb-1 enabled 1
  end-if.
...
```
