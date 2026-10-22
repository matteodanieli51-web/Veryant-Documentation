## Enabled

This property assumes a value of "0" if the Entry-Field control is disabled, "1" if it is enabled.

**Example** - Define an entry-field control, initially disabled and enable it on procedure division

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     enabled 0
     id 20
     3-d
     .
...
procedure division.
...
  modify screen-1-ef-3 enabled 1
...
```
