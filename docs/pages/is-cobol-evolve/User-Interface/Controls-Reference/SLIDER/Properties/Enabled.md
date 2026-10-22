## Enabled

This property assumes a value of "0" if the Slider control is disabled, "1" if it is enabled.

**Example** - Define a slide-bar initially disabled to enable it on procedure division later

```cobol
screen section.
...
  03 screen-1-sl-1 Slider
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     color 135
     id 9
     horizontal
     enabled 0
     .
...
procedure division.
...
  modify screen-1-sl-1 enabled 1
...
```
