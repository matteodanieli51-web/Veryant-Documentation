## Bitmap-Scale

This property specifies what to do if the image dimensions don’t fit the Bitmap area identified by [Lines](./Lines), [Size](./Size) and [Bitmap-Width](./Bitmap-Width) properties.

[Bitmap-Width](./Bitmap-Width) is considered instead of [Size](./Size) only if [Bitmap-Number](./Bitmap-Number) is set, otherwise [Size](./Size) is considered.

The possible values for this property are:

|  |  |
| --- | --- |
| 0 | The image is not altered. In this case, if the image is too large, it will be truncated, if it’s too small, it will be aligned to the top left corner of the Bitmap area. This is also the default behavior when Bitmap-Scale is not set. |
| 1 | The image is resized to fit completely the Bitmap area. The aspect ratio may be altered. |
| 2 | The image is resized maintaining the aspect ratio. The resized image may not fit completely the Bitmap area. |

The quality of the scaled image is controlled by the [iscobol.bitmap_scale.best_quality (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

If the Bitmap control is resized by a Layout-Manager and Bitmap-Scale is set to "1" or "2", then the image is resized along with the window.

When dealing with bitmap strips, the runtime first isolates the image from the strip, then it applies the scale to the isolated image.

**Example -** Define a bitmap control that will display a scaled image

```cobol
working-storage section.
...
77 jlogo-jpg pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-bi-1 Bitmap
     line 10.0
     column 48.0
     size 130 pixels
     lines 150 pixels
     id 5
     bitmap-scale 1
     bitmap-handle jlogo-jpg
     .
```
