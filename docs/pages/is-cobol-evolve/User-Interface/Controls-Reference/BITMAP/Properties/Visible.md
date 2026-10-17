## Visible

This property assumes a value of "0" if the Bitmap control is not visible, "1" if it is visible.

**Example -** Define a bitmap invisible and make it visible later on procedure division

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.0
     column 33.0
     size 63 pixels
     lines 68 pixels
     id 9
     visible 0
     .
...
procedure division.
...
   modify screen-1-bi-3 visible 1.
...
```
