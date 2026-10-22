## Minor-Tick-Spacing

This property sets the minor increment in the range of values. When the [Show-Ticks](../Styles/Show-Ticks) style is set, this property affects the amount of space between the minor tick markers.

**Example** - Define a slider-bar with minor and mayor tick spacing and show ticks

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
     minor-tick-spacing 1
     major-tick-spacing 5
     labels-increment 15
     .
```
