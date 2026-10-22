## Min-Val

This property is the minimum value represented by the Slider control.

**Example** - Define a slide-bar with min and max values

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
     major-tick-spacing 3
     labels-increment 10
     .
```
