## W$SCALE

The W$SCALE library routine resizes an image.

The routine creates a new image resource and returns its handle. The newly created resource is not released automatically. It must be destroyed by the programmer with the [WBITMAP-DESTROY](./W$BITMAP/WBITMAP-DESTROY) function when it is no longer needed.

The quality of the scaled image is controlled by the [iscobol.bitmap_scale.best_quality (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

### Syntax:

```cobol
 CALL "W$SCALE" USING bitmapHandle
                      newWidth
                      newHeight
                      windowHandle
                      scaleMode
                      scaleAlign
               GIVING scaledBitmapHandle
```

### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *bitmapHandle* | USAGE HANDLE | Specifies an handle of an existing image. |  |
| *newWidth* | any numeric data item or numeric literal | Specifies the width, in window's cells, of the target area that will contain the new image. |  |
| *newHeight* | any numeric data item or numeric literal | Specifies the height, in window's cells, of the target area that will contain the new image. |  |
| *windowHandle* | USAGE HANDLE | Specifies the handle of an existing window. It is used to calculate the cell size. If this parameter is omitted or zero, then *newWidth* and *newHeight* are considered pixels. |  |
| *scaleMode* | any numeric data item or numeric literal | Specifies the scaling method. Valid values, defined in [isgui.def](../Copybooks/isgui.def), are: |  |
|  |  | WSCALE-STRETCH | The image is stretched to fit the target area |
|  |  | WSCALE-RESIZE-XY | Aspect ratio is maintained. The unused part of the target area, if any, will be transparent. |
|  |  | WSCALE-RESIZE-X | The image is resized so that its width matches the width of the target area, maintaining the aspect ratio. If the new image does not fit vertically the target area, that part of the image that exceeds the space available is truncated. Otherwise, the unused part of the target area will be transparent. |
|  |  | WSCALE-RESIZE-Y | The image is resized so that its height matches the height of the target area, maintaining the aspect ratio. If the new image does not fit horizontally the target area, that part of the image that exceeds the space available is truncated. Otherwise, the unused part of the target area will be transparent. |
|  |  | WSCALE-RESIZE-NONE | The image is not resized, it is just positioned in the area specified by *newHeight* and *newWidth*. The position is controlled by the *scaleAlign* parameter. |
| *scaleAlign* | any numeric data item or numeric literal | Specifies the placement of the new image in the target area. Valid values, defined in [isgui.def](../Copybooks/isgui.def), are: |  |
|  |  | WSCALE-AL-BOTTOM-LEFT<br>WSCALE-AL-BOTTOM-CENTER<br>WSCALE-AL-BOTTOM-RIGHT<br>WSCALE-AL-MIDDLE-LEFT<br>WSCALE-AL-MIDDLE-CENTER<br>WSCALE-AL-MIDDLE-RIGHT<br>WSCALE-AL-TOP-LEFT<br>WSCALE-AL-TOP-CENTER<br>WSCALE-AL-TOP-RIGHT | The new image is bottom/left aligned.<br>The new image is bottom/center aligned.<br>The new image is bottom/right aligned.<br>The new image is middle/left aligned.<br>The new image is middle/center aligned.<br>The new image is middle/right aligned.<br>The new image is top/left aligned.<br>The new image is top/center aligned.<br>The new image is top/right aligned. |

### Return code:

*scaledBitmapHandle* can be any data item declared PIC S9(9) and receives the handle to the newly created image, the result of the scaling.

### Examples:

**Example -** Scale an image to width=22 and height=10

```cobol
*> 77 h-bitmap        handle.
*> 77 h-bitmap-resize handle.
*> 77 hWin            handle.

display independent graphical window
                   color  65793
                   with   system menu
                   title  "W$SCALE Routine"
                   handle hWin.
...
call "w$scale" using h-bitmap 22 10 hWin
     wscale-resize-xy
     wscale-al-top-left
     giving h-bitmap-resize.
```
