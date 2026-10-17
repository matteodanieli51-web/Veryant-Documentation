## Background-Bitmap-Scale

This property specifies what to do if the image dimensions don’t fit the Ribbon area.

The possible values for this property are:

|  |  |
| --- | --- |
| 0 | The image is not altered. In this case, if the image is too large, it will be truncated, if it’s too small, it will be aligned to the top left corner of the Ribbon area. |
| 1 | The image is resized to fit completely the Ribbon area. The aspect ratio may be altered. This is also the default behavior when Background-Bitmap-Scale is not set. |
| 2 | The image is resized maintaining the aspect ratio. The resized image may not fit completely the Ribbon area. |

The quality of the scaled image is controlled by the [iscobol.bitmap_scale.best_quality (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

If the Ribbon control is resized by a Layout-Manager and Background-Bitmap-Scale is set to "1" or "2", then the image is resized along with the window.

**Example** - Display a ribbon control with background image

```cobol
working-storage section.
77 screen-1-rbn-1-hdl  handle of ribbon.
77 watermark-jpg pic s9(9) comp-4.
...
procedure division.
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 0 0)
          lines 4.4375
          background-bitmap-handle watermark-jpg
          background-bitmap-scale 0
          id 6
          bitmap-width 16
          handle screen-1-rbn-1-hdl
          .
...
```
