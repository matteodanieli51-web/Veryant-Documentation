### WBITMAP-LOAD

The WBITMAP-LOAD function loads an image into memory.

In thin client environment the bitmap is loaded on the server and it is sent to the client later, when the program uses it.

If the loading fails, you might consider trying again with the [iscobol.bitmap.load_method](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property set to 2.

#### Syntax:

```cobol
 CALL "W$BITMAP" USING WBITMAP-LOAD
                       name
                GIVING bitmapHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WBITMAP-LOAD | Constant |  |
| *name* | PIC X(n) | Specifies the name of the file containing the image to be displayed.<br>Unless the file has been included in the program class file through the [COPY](../../../Language-Reference/Compiler-Directing-Statements/COPY) RESOURCE statement, the framework will look for the file on disk.<br>During the search on disk, if *name* specifies relative pathname, the framework will resolve the relative pathname in the following locations, in order:<br>1. the current working directory<br>2. any jar and directory listed in the Classpath<br>3. the same jar or directory where the program class file was loaded from. |

#### Return code:

*bitmapHandle* must be declared as PIC S9(9) COMP-4 and provides additional information:

|  |  |
| --- | --- |
| > 0 | Receives the handle to the bitmap |
| -1 | Error: file not found or not readable |
| -2 | Error: out of memory loading the bitmap |
| -3 | Error: not a valid bitmap |
| -4 | Error: format not supported |
