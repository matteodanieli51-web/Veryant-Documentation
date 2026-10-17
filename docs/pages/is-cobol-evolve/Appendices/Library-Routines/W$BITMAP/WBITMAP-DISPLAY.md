### WBITMAP-DISPLAY

The WBITMAP-DISPLAY function loads an image into memory and then displays it on the screen. The position of the image is expressed in cells. It is not possible to define a custom size or a "zoom level" for the image. By default, the screen cells occupied by the image are filled with the window's background color, unless the WBITMAP-NO-FILL flag is specified.

The bitmap shown by this op-code is not erased if it’s overlapped by another control.

In thin client environment the bitmap is loaded on the server and it is sent to the client to be displayed.

If the function fails, you might consider trying again with the [iscobol.bitmap.load_method](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property set to 2.

#### Syntax:

```cobol
 CALL "W$BITMAP" USING WBITMAP-DISPLAY
                       name
                       row
                       column
                       flags
                GIVING bitmapHandle
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WBITMAP-DISPLAY | Constant |  |  |
| *name* | PIC X(n) | Specifies the name of the file containing the image to be displayed.<br>Unless the file has been included in the program class file through the [COPY](../../../Language-Reference/Compiler-Directing-Statements/COPY) RESOURCE statement, the framework will look for the file on disk.<br>During the search on disk, if *name* specifies relative pathname, the framework will resolve the relative pathname in the following locations, in order:<br>1. the current working directory<br>2. any jar and directory listed in the Classpath<br>3. the same jar or directory where the program class file was loaded from. |  |
| *row* | any numeric data item or numeric literal | Specifies the row, measured in window's cells, where the upper-left image corner is positioned. Decimal values are allowed. |  |
| *column* | any numeric data item or numeric literal | Specifies the column, measured in window's cells, where the upper-left image corner is positioned. Decimal values are allowed. |  |
| *flags* | any numeric data item or numeric literal | Its value affects the way the image is displayed. At present it is possible to assign to it the following symbolic value only: |  |
|  |  | WBITMAP-NO-FILL | The screen cells occupied by the image are not filled with the window's background color. |

#### Return code:

*bitmapHandle* must be declared as PIC S9(9) COMP-4 and provides additional information:

|  |  |
| --- | --- |
| > 0 | Receives the handle to the bitmap |
| -1 | Error: file not found or not readable |
| -2 | Error: out of memory loading the bitmap |
| -3 | Error: not a valid bitmap |
| -4 | Error: format not supported |
