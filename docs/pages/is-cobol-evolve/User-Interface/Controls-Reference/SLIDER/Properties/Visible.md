## Visible

This property assumes a value of "0" if the Slider control is not visible, "1" if it is visible.

**Example** - Define a slide-bar initially invisible and make it visible on procedure division

```cobol
screen section.
...
  03 screen-1-sl-2 Slider
     line 39.1
     column 12.8
     size 38.4 cells
     lines 3.8 cells
     id 10
     horizontal
     show-labels
     min-val 10
     max-val 100
     page-size 5
     labels-increment 15
     visible 0
     .
...
procedure division.
...
   modify screen-1-sl-2 visible 1
...
```
