## Bitmap-Width

This property identifies the width in pixels of the image displayed in the Bitmap control. The bitmap strip identified by the [Bitmap-Handle](./Bitmap-Handle) property is divided into several smaller images. The width of each image is the value assigned to this property.

This property is evaluated only if [Bitmap-Scale](./Bitmap-Scale) and [Bitmap-Number](./Bitmap-Number) are set as well. If [Bitmap-Scale](./Bitmap-Scale) and [Bitmap-Number](./Bitmap-Number) are not set or [Bitmap-Width](./Bitmap-Width) is omitted, then the [Size](./Size) property is used to specify the width of the image.

**Example -** Define a bitmap control that will show image strip 3 from a series of icons 16x16 pixels

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
   size 32 pixels
   lines 32 pixels
   id 5
   bitmap-handle icon-png
   bitmap-number 3
   bitmap-scale 1
   bitmap-width 16
   .
```
