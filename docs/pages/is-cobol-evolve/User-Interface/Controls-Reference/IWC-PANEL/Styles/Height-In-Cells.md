## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the IWC-Panel control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define an iwc-panel with height in cells

```cobol
screen section.
...
  03 screen-1-ip-1 Iwc-Panel
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8
     id 16
     js-name "f-map"
     height-in-cells.
```
