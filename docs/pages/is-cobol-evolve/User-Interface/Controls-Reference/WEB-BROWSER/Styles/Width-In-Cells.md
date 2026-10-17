## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Web-Browser control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example** - Define a web-browser control with height and width in cells using the styles

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.9
     column 2.2
     size 62.2
     lines 25.6
     id 15
     height-in-cells
     width-in-cells
     value "https://www.veryant.com"
     .
```
