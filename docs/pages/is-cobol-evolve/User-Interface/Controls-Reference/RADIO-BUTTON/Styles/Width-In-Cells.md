## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Radio-Button control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example** - Define a radio button with height-in-cells style

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9
     lines 5.4 cells
     font Calibri-10v00
     help-id 3020
     id 5
     background-high
     width-in-cells
     title "Option 2"
     .
```
