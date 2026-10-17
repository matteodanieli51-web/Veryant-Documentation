## Horizontal

When this style is set, the slider bar is displayed from left to right. The [Lines](../Properties/Lines) property controls the height and the [Size](../Properties/Size) property controls the width.

Without this style instead the slider bar is displayed from top to bottom. The [Lines](../Properties/Lines) property controls the width and the [Size](../Properties/Size) property controls the height.

**Example** - Define a horizontal slide-bar

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
     .
```
