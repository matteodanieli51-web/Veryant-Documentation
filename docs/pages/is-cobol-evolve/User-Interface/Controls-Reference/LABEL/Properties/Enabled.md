## Enabled

This property assumes a value of "0" if the Label control is disabled, "1" if it is enabled.

**Example** - Define a label initially disabled and enable later in procedure division

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     color 519
     id 25
     enabled 0
     title "This is the main Title"
     .
...
procedure division.
...
   modify screen-1-la-1 enabled 1
...
```
