## Bitmap-Default

This property identifies the image to be displayed when the Check-Box control is in normal status. The number corresponds to the position occupied by the image in the bitmap strip.

This property conflicts with [Bitmap-Number](./Bitmap-Number). If Bitmap-Default and Bitmap-Number are used together, then the first one found in the control description is considered.

**Example -** Define a checkbox in screen section and define which bitmap to use when unselected from a image containing many bitmaps

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
   bitmap-default 1
   bitmap-width 20
   title-position 2
   bitmap-selected 2
   .
```
