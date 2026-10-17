## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the List-Box control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a list-box with height and width in cells

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     height-in-cells
     width-in-cells
     line 5.7
     column 3.1
     size 34.6
     lines 15.5
     id 1
     .
```
