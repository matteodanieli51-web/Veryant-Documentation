## Bitmap-Number

This property identifies the image to be displayed when the Bitmap control is in normal status. The number corresponds to the position occupied by the image in the bitmap strip.

**Example -** Define a bitmap control and use the second image on a bitmap strips that contains several images

```cobol
working-storage section.
...
77 icon-png pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-bi-1 Bitmap
     line 14.0
     column 50.0
     size  17 pixels
     lines 30 pixels
     id 5
     bitmap-handle icon-png
     bitmap-number 2
     .
```
