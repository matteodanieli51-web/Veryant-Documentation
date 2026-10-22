## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Bitmap control.

**Example -** Define a bitmap that shows a hint message when mouse hovers it

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.8
     column 33.5
     size 63 pixels
     lines 68 pixels
     font Arial-0v00
     id 9
     hint "We are the right company for you"
     .
```
