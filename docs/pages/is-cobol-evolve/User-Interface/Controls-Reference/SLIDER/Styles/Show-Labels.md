## Show-Labels

When this style is set, the value of each major tick marker is shown. To see values, the [Show-Ticks](./Show-Ticks) style must be also set.

**Example** - Define a slide-bar with show-labels and show-ticks styles

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
