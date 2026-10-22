## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Push-Button control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a push-button with height and width in cells

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 7.4
     lines 2.5
     id 3
     title "Save"
     height-in-cells
     width-in-cells
     .
```
