### WBITMAP-LOAD-FROM-CLIENT

The WBITMAP-LOAD-FROM-CLIENT function loads an image into memory. In a thin client environment, the bitmap is searched on the client side. In the other environments, calling this function is the same as calling WBITMAP-LOAD.

The loaded bitmap can be used on the GUI and on client-side print jobs, but not on server-side print jobs (see [WINPRINT-SET-PRINTER-AS](../WIN$PRINTER/WINPRINT-SET-PRINTER-AS) for more information about client-side and server-side print jobs).

#### Syntax:

```cobol
 CALL "W$BITMAP" USING WBITMAP-LOAD-FROM-CLIENT
                       name
                GIVING bitmapHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WBITMAP-LOAD-FROM-CLIENT | Constant |  |
| *name* | PIC X(n) | Specifies the name of the file containing the image to be displayed.<br>The framework will look for the file on the disk of the client PC.<br>During the search on disk, if *name* specifies relative pathname, the framework will resolve the relative pathname in the following locations, in order:<br>1. the current working directory on the client PC<br>2. any jar and directory listed in the Client’s Classpath. |

#### Return code:

*bitmapHandle* must be declared as PIC S9(9) COMP-4 and provides additional information:

|  |  |
| --- | --- |
| > 0 | Receives the handle to the bitmap |
| -1 | Error: file not found or not readable |
| -2 | Error: out of memory loading the bitmap |
| -3 | Error: not a valid bitmap |
| -4 | Error: format not supported |
