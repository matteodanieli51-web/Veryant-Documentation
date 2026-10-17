## Inverted

When this style is set, the values are represented from top to bottom. When used in conjunction with the [Horizontal](./Horizontal) style, the values are represented from right to left.

**Example** - Define a horizontal slide-bar where the max value appears on the left and the min value on the right (inverted)

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
     inverted
     show-labels
     min-val 10
     max-val 100
     page-size 5
     labels-increment 15
     .
```
