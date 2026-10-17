## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Check-Box control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example -** Define a check-box in screen section with its height in cells

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 3.0
     id 11
     title "Sugar for you coffee?"
     height-in-cells
     .
```
