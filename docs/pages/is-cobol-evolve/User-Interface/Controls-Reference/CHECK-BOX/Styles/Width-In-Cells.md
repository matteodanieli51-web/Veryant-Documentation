## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Check-Box control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example -** Define a check-box with width in cells

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 11.0
     lines 30
     id 11
     title "Sugar for you coffee?"
     width-in-cells
     .
```
