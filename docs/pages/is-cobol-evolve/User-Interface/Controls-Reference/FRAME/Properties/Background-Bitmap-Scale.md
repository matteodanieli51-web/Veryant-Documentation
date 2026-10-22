## Background-Bitmap-Scale

This property specifies what to do if the image dimensions don’t fit the Frame area identified by [Lines](./Lines) and [Size](./Size) properties.

The possible values for this property are:

|  |  |
| --- | --- |
| 0 | The image is not altered. In this case, if the image is too large, it will be truncated, if it’s too small, it will be aligned to the top left corner of the Frame area. |
| 1 | The image is resized to fit completely the Frame area. The aspect ratio may be altered. This is also the default behavior when Background-Bitmap-Scale is not set. |
| 2 | The image is resized maintaining the aspect ratio. The resized image may not fit completely the Frame area. |

The quality of the scaled image is controlled by the [iscobol.bitmap_scale.best_quality (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

If the Frame control is resized by a Layout-Manager and Background-Bitmap-Scale is set to "1" or "2", then the image is resized along with the window.

**Example** - Define a frame control with background image

```cobol
working-storage section.
...
77 watermark-jpg pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     background-bitmap-handle watermark-jpg
     background-bitmap-scale 0
    .
```
