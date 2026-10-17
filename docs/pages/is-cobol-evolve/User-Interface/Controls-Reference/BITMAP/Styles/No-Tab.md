## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example -** Define a bitmap that that would be skipped when tab is pressed

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
     no-tab
     visible 0
     .
```
