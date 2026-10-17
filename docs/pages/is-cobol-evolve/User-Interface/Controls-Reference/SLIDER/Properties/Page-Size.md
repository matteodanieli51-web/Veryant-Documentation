## Page-Size

This property sets the size of the range covered by the knob.

**Example** - Define a slide-bar from 10 to 100 and the knob will go thru 95 only

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
     show-ticks
     show-labels
     min-val 10
     max-val 100
     page-size 5
     minor-tick-spacing 1
     major-tick-spacing 5
     labels-increment 15
     .
```
