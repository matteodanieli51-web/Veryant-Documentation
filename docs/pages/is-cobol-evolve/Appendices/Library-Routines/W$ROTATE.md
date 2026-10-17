## W$ROTATE

The W$ROTATE library routine rotates an image.

The routine creates a new image resource and returns its handle. The newly created resource is not released automatically. It must be destroyed by the programmer with the [WBITMAP-DESTROY](./W$BITMAP/WBITMAP-DESTROY) function when it is no longer needed.

### Syntax:

```cobol
 CALL "W$ROTATE" USING bitmapHandle
                       rotationRadians
                GIVING rotatedBitmapHandle
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *bitmapHandle* | USAGE HANDLE | Specifies an handle of an existing image. |
| *rotationRadians* | any numeric data item or numeric literal | Specifies the rotation angle, expressed in radians. Decimal values are allowed.<br>A circle contains 2? radians. Thus, a radian measures 360/2? degrees, i.e. 57.295779513082320876798154814105 degrees. On the other hand, one degree measures 2?/360 radians, i.e. 0.017453292519943295769236907684886 radians. The most convenient way to handle angles is to define the constant PI as 3.14159265358979323 and use it in calculations. You can also define the constant DEG as 0.017453292519943295 and calculate RotationRadians = (Degrees) \* DEG. |

### Return code:

*rotatedBitmapHandle* can be any data item declared PIC S9(9) and receives the handle to the newly created image, the result of the rotation.

### Examples:

**Example -** Rotate an image 45 degrees

```cobol
*> 77 angle           pic 9v9(6).
*> 77 h-bitmap        handle.
*> 77 h-bitmap-rotate handle.

call "w$bitmap" using wbitmap-load, "c:\tmp\images\img1.png"
     giving h-bitmap
compute angle = 45 * 0.01745
call "w$rotate" using h-bitmap angle
     giving h-bitmap-rotate
```
