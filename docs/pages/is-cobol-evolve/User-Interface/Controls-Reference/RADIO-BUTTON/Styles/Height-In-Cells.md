## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Radio-Button control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a radio button with height-in-cells style

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4
     font Calibri-10v00
     help-id 3020
     id 5
     background-high
     height-in-cells
     title "Option 2"
     .
```
