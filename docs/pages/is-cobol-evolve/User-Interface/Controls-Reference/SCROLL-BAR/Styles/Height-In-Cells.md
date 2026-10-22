## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Scroll-Bar control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a scroll-bar with height and width in cells

```cobol
screen section.
...
  03 screen-1-sb-2 Scroll-Bar
     line 39.1
     column 12.8
     size 2.0
     lines 26.8
     id 10
     height-in-cells
     width-in-cells
     .
```
