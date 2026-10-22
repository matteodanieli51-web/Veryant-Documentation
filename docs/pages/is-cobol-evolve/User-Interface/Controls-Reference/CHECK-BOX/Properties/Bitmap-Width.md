## Bitmap-Width

This property identifies the width in pixels of the image displayed in the Check-Box control. The bitmap strip identified by the [Bitmap-Handle](./Bitmap-Handle) property is divided into several smaller images. The width of each image is the value assigned to this property.

If this property is omitted, then the [Size](./Size) property is used to specify the width of the image.

**Example** - Define a checkbox in screen section and define the width of each bitmap on a image containing many

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
