## Width-In-Cells

This style implies that the value specified for the [Size](../Properties/Size) property, the one setting the Bitmap control’s width, is expressed in CELLS. It is possible to get the same result writing: "[Size](../Properties/Size) *value* CELLS".

**Example -** Define a bitmap with its width in cells using this style

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.0
     column 33.0
     size 63
     lines 68
     height-in-cells
     width-in-cells
     id 9
     visible 0
     .
```
