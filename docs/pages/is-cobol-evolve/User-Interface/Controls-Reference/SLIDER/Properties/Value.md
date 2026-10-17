## Value

This property represents the value of the Slider control.

When inquired, it returns the value that is currently represented.

When set, the Slider control changes its look to represent it.

It is the position of the slider.

**Example** - Get the value of an slide-bar

```cobol
working-storage section.
77 ws-sl2-val   pic 9(5).
...
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
     .
...
procedure division.
...
   inquire screen-1-sl-2 value ws-sl2-val
...
```
