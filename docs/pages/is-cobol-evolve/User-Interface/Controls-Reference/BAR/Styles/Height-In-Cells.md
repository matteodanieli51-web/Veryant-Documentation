## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Bar control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example -** Define a vertical bar on the screen section definition expressing height in cells

```cobol
screen section.
...
  03 screen-1-br-3 Bar
     line 10.0
     column 5.0
     lines 22.0
     id 3
     height-in-cells
     .
```
