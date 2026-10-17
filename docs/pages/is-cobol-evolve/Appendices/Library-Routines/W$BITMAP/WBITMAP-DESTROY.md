### WBITMAP-DESTROY

The WBITMAP-DESTROY function destroys an image previously loaded is destroyed and releases its associated memory. If the image was displayed with the [WBITMAP-DISPLAY](./WBITMAP-DISPLAY) function, it is removed from the screen and he space previously occupied by the bitmap is filled with the window's background color.

**Note:** Using the [DESTROY](../../../Language-Reference/Procedure-Division-Statements/DESTROY) statement instead of this op-code will not remove the handle from memory.

#### Syntax:

```cobol
 CALL "W$BITMAP" USING WBITMAP-DESTROY
                       bitmapHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WBITMAP-DESTROY | Constant |  |
| *bitmapHandle* | USAGE HANDLE | Specifies a valid handle returned by the [WBITMAP-DISPLAY](./WBITMAP-DISPLAY) or the [WBITMAP-LOAD](./WBITMAP-LOAD) function or the [W$CAPTURE](../W$CAPTURE), the [W$ROTATE](../W$ROTATE) or the [W$SCALE](../W$SCALE) library routines. |
