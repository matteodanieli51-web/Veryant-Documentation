## Bitmap-Selected

This property identifies the image to be displayed when the Check-Box control is selected. The number corresponds to the position occupied by the image in the bitmap strip.

**Example -** Define a checkbox in screen section and define what bitmap to use when the check box is selected

```cobol
screen section.
...
03 screen-1-cb-2 Check-Box
   line 27.0
   column 10.0
   size 116
   lines 31
   id 11
   flat
   title "My Check Box"
   bitmap-handle my-cb-png
   bitmap-number 1
   bitmap-width 20
   title-position 2
   bitmap-selected 2
   .
```
