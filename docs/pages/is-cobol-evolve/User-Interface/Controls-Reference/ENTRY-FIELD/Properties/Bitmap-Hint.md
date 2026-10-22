## Bitmap-Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the bitmap shown before the text in the Entry-Field control.

**Example** - Define an entry-field control with leading and trailing images and hints do be displayed when the mouse goes over them

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     bitmap-handle bmp-strip
     bitmap-width 16
     bitmap-number 1
     bitmap-disabled 2
     bitmap-rollover 3
     bitmap-hint "This is the bitmap on the left"
     bitmap-trailing-number 4
     bitmap-trailing-disabled 5
     bitmap-trailing-rollover 6
     bitmap-trailing-hint "This is the bitmap on the right"
     id 19
     3-d
     .
```
