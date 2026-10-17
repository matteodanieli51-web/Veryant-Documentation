## W$IMAGESIZE

The W$IMAGESIZE library routine allows you to retrieve the width and the height in pixels of an image resource.

### Syntax:

```cobol
 CALL "W$IMAGESIZE" USING bitmapHandle
                          imageWidth
                          imageHeight
                   GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *BitmapHandle* | USAGE HANDLE | Specifies the handle of a valid image resource. |
| *ImageWidth* | any numeric data item | Receives the width in pixels of the image or zero on failure. |
| *ImageHeight* | any numeric data item | Receives the height in pixels of the image or zero on failure. |

### Return Code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation failed. |

### Examples:

**Example -** Get the dimensions of an image

```cobol
working-storage section.
copy "isgui.def".
77  hBmp pic s9(9) comp-4.
77  w-width    pic 9(5)v99.
77  w-height   pic 9(5)v99.
77  f-image-name pic x(80).


procedure division.
main.
  move "c:\tmp\img1.jpg" to f-image-name
  call "w$bitmap" using wbitmap-load, f-image-name
       giving hBmp
  call "w$imagesize" using hBmp, w-width, w-height

  display message "File : " f-image-name x"0d0a"
                  "width : " w-width " height : " w-height.
```
