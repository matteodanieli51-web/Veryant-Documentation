## Background-Bitmap-Scale

This property specifies what to do if the image dimensions don’t fit the Sroll-Pane area identified by [Lines](./Lines) and [Size](./Size) properties.

The possible values for this property are:

|  |  |
| --- | --- |
| 0 | The image is not altered. In this case, if the image is too large, it will be truncated, if it’s too small, it will be aligned to the top left corner of the Scroll-Pane area. |
| 1 | The image is resized to fit completely the Scroll-Pane area. The aspect ratio may be altered. This is also the default behavior when Background-Bitmap-Scale is not set. |
| 2 | The image is resized maintaining the aspect ratio. The resized image may not fit completely the Scroll-Pane area. |

The quality of the scaled image is controlled by the [iscobol.bitmap_scale.best_quality (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

If the Scroll-Pane control is resized by a Layout-Manager and Background-Bitmap-Scale is set to "1" or "2", then the image is resized along with the window.

**Example -** Define a scroll-pane control with background image

```cobol
working-storage section.
...
77 watermark-jpg pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-sp-1 Scroll-pane
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     background-bitmap-handle watermark-jpg
     background-bitmap-scale 0
     .
```
