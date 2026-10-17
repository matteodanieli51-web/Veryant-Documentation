## Bitmap-Scale

This property specifies what to do if the image dimensions don’t fit the area identified by [Lines](./Lines), [Size](./Size) and [Bitmap-Width](./Bitmap-Width) properties.

The possible values for this property are:

|  |  |
| --- | --- |
| 0 | The image is not altered. This is also the default behavior when Bitmap-Scale is not set. |
| 1 | The image is resized to fit completely the area. The aspect ratio may be altered. |
| 2 | The image is resized maintaining the aspect ratio. The resized image may not fit completely the area. |

The quality of the scaled image is controlled by the [iscobol.bitmap_scale.best_quality (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

If the Radio-Button control is resized by a Layout-Manager and Bitmap-Scale is set to "1" or "2", then the image is resized along with the window.

When dealing with bitmap strips, the runtime first isolates the image from the strip, then it applies the scale to the isolated image.

The initial scaling of the bitmap to the dimensions of the Radio-Button occurs only if the [Title-Position](./Title-Position) property is 0 or omitted. If [Title-Position](./Title-Position) is not 0, the bitmap will be scaled only when the dimensions of the Radio-Button change.

**Example** - Define a radio button that uses a bitmap defining the width of every image in the bitmap and apply bitmap scaling

```cobol
screen section.
...
  03 screen-1-rb-1 Radio-Button
     line 20.9
     column 5.4
     size 112
     lines 45
     id 4
     title "Option 1"
     bitmap-handle icon-png1
     square
     bitmap-number 1
     bitmap-disabled 6
     bitmap-rollover 3
     bitmap-pressed 2
     bitmap-width 18
     bitmap-scale 2
     title-position 2
     bitmap-selected 5
     bitmap-rollover-selected 4
     .
```
