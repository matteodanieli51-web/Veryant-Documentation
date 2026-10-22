## Enabled

This property assumes a value of "0" if the Tree-View control is disabled, "1" if it is enabled.

**Example** - Define a tree-view initially disabled and enable it later

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     enabled 0
     id 2
     no-box
     .
...
procedure division.
...
  modify screen-1-tv-1 enable 1
...
```
