## Bitmap-Timer

This property sets the amount of time any bitmap is displayed (for animation) from Bitmap-Start to Bitmap-End and is expressed in hundredths of seconds.

**Example -** Define a bitmap control that will show image strips from 3 (bitmap-start) to 6 (bitmap-end) and each image will be shown 50 hundreths (bitmap-timer) of a second

```cobol
working-storage section.
...
77 icon-png pic s9(9) comp-4.
...
screen section.
...
03 screen-1-bi-1 Bitmap
   line 14.9
   column 50.5
   size 17 pixels
   lines 36 pixels
   id 5
   bitmap-handle icon-png
   bitmap-number 3
   bitmap-start 3
   bitmap-end 6
   bitmap-timer 50
   .
```
