## Background-Bitmap-Scale

This property specifies what to do if the image dimensions don’t fit the window area identified by [Lines](./Lines) and [Size](./Size) properties.

The possible values for this property are:

|  |  |
| --- | --- |
| 0 | The image is not altered. In this case, if the image is too large, it will be truncated, if it’s too small, it will be aligned to the top left corner of the window area. |
| 1 | The image is resized to fit completely the window area. The aspect ratio may be altered. This is also the default behavior when Background-Bitmap-Scale is not set. |
| 2 | The image is resized maintaining the aspect ratio. The resized image may not fit completely the window area. |

The quality of the scaled image is controlled by the [iscobol.bitmap_scale.best_quality (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

If the window is resized by a Layout-Manager and Background-Bitmap-Scale is set to "1" or "2", then the image is resized along with the window.

**Example -** Display a standard window with background image

```cobol
working-storage section.
...
77 watermark-jpg pic s9(9) comp-4.
77 window-handle usage handle of window.
...
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 64.0
          lines 55.8
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          background-bitmap-handle watermark-jpg
          background-bitmap-scale 0
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          handle window-handle
          .
...
```
