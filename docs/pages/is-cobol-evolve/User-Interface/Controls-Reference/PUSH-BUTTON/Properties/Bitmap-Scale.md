## Bitmap-Scale

This property specifies what to do if the image dimensions don’t fit the area identified by [Lines](./Lines), [Size](./Size) and [Bitmap-Width](./Bitmap-Width) properties.

The possible values for this property are:

|  |  |
| --- | --- |
| 0 | The image is not altered. This is also the default behavior when Bitmap-Scale is not set. |
| 1 | The image is resized to fit completely the area. The aspect ratio may be altered. |
| 2 | The image is resized maintaining the aspect ratio. The resized image may not fit completely the area. |

The quality of the scaled image is controlled by the [iscobol.bitmap_scale.best_quality (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

If the Push-Button control is resized by a Layout-Manager and Bitmap-Scale is set to "1" or "2", then the image is resized along with the window.

When dealing with bitmap strips, the runtime first isolates the image from the strip, then it applies the scale to the isolated image.

The initial scaling of the bitmap to the dimensions of the Push-Button occurs only if the [Title-Position](./Title-Position) property is 0 or omitted. If [Title-Position](./Title-Position) is not 0, the bitmap will be scaled only when the dimensions of the Push-Button change.

**Example** - Define a push-button using different bitmap images for different states of it and apply bitmap scaling

```cobol
screen section.
...
  03 screen-1-pb-1 Push-Button
     line 4.5
     column 8.1
     size 70
     lines 48
     id 1
     bitmap-handle icon-png
     square
     bitmap-default 21
     bitmap-disabled 18
     bitmap-rollover 19
     bitmap-pressed 20
     bitmap-width 18
     bitmap-scale 2
     .
```
