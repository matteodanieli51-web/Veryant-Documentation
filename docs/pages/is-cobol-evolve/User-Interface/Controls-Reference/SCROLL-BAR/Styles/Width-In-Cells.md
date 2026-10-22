## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Scroll-Bar control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example** - Define a scroll-bar with height and width in cells

```cobol
screen section.
...
  03 screen-1-sb-2 Scroll-Bar
     line 39.1
     column 12.8
     size 2.4
     lines 30.8
     id 10
     height-in-cells
     width-in-cells
     .
```
