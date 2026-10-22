## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Push-Button control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) value CELLS".

**Example** - Define a push-button with width and height in cells

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
