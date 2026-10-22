## Visible

This property assumes a value of "0" if the Entry-Field control is not visible, "1" if it is visible.

**Example** - Define an entry-field initially invisible to make it visible on produce division later

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     visible 0
     .
...
procedure division.
...
  modify screen-1-ef-3 visible 1
...
```
