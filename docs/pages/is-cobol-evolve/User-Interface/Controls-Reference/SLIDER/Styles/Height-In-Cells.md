## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Slider control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a slide-bar with height and width in cells

```cobol
screen section.
...
  03 screen-1-sl-2 Slider
     line 39.1
     column 12.8
     size 38.4
     lines 3.8
     id 10
     background-low
     bold
     horizontal
     show-labels
     min-val 10
     max-val 100
     page-size 5
     labels-increment 15
     height-in-cells
     width-in-cells
     .
```
