## W$SAVE_IMAGE

The W$SAVE_IMAGE routine saves the image pointed by a bitmap handle into a regular disk file. The save process allows you to convert the image to a different format and set some attributes like quality and transparency.

### Syntax:

```cobol
 CALL "W$SAVE_IMAGE" USING bitmapHandle
                           fileName
                          [WSAVE-OPTIONS]
                    GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *bitmapHandle* | USAGE HANDLE | Specifies an handle of an existing image. |
| *fileName* | PIC X(n) | Specifies the name of a regular disk file that will store the saved image. |
| *WSAVE-OPTIONS* | Group Item | Structure that allows you to customize the image format, quality and attributes. It’s defined in [iscobol.def](../Copybooks/iscobol.def) as follows:<br>*wsave-format*<br>Image format between BMP, GIF, JPG and PNG. By default PNG is used.<br>*wsave-quality*<br>Image quality value. The valid range is from 0 (best compression, lower quality) to 100 (no compression, best quality). It’s evaluated only for the JPG format.<br>*wsave-transparency*<br>Activates the transparency and identifies the RGB of the transparent color. *wsave-transparent-color* can be calculated as follows:  (RED \* 65536) + (GREEN \* 256) + BLUE. It’s evaluated only for the PNG and GIF formats.<br>*wsave-client-server*<br>Specifies if the image must be saved server side or client side in a thin client environment.  By default the image is saved on the same machine where the runtime system is running, so server side in thin client. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation failed. |
| 1 | Operation successful. |

### Example:

**Example -** Load a BMP file and save it as JPG

```cobol
working-storage section.
copy "isgui.def".
copy "iscobol.def".
77 hbmp handle.

procedure division.
main.
     call "w$bitmap" using wbitmap-load, "src.bmp", giving hbmp.
     initialize wsave-options.
     set wsave-jpg to true.
     move 75 to wsave-quality.
     call "w$save_image" using hbmp, "dest.jpg", wsave-options.
     goback.
```
