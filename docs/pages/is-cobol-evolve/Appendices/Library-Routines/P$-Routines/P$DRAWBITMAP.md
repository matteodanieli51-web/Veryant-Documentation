### P$DRAWBITMAP

The P$DRAWBITMAP library routine prints a bitmap.

If you need to print text over the bitmap, do it after this call. If you do it before, the bitmap covers the text.

#### Syntax

```cobol
 CALL "P$DRAWBITMAP" USING fileName
                          [xPosition, yPosition]
                          [positionMode]
                          [positionUnits]
                          [sizeWidth, sizeHeight]
                          [sizeUnits]
                   [GIVING returnCode]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the bitmap file.<br>The following extensions are supported: BMP, JPG, PNG, GIF |
| *xPosition* | any numeric data item | Optional. X coordinate of the bitmap. |
| *yPosition* | any numeric data item | Optional. Y coordinate of the bitmap. |
| *positionMode* | PIC X(n) | Optional. Must contain “Absolute” |
| *positionUnits* | PIC X(n) | Optional. Can be either "Inches", "Metric", "Characters", or "Device Units". This value should match with the value of *SizeUnits*. |
| *sizeWidth* | any numeric data item | Optional. Width of the bitmap. |
| *sizeHeight* | any numeric data item | Optional. Height of the bitmap. |
| *sizeUnits* | PIC X(n) | Optional. Can be either "Inches", "Metric", "Characters", or "Device Units". This value should match with the value of *PositionUnits*. |

#### Return code

|  |  |  |
| --- | --- | --- |
| *returnCode* | PIC 9(n) | Receives the exit status: zero for failure, non-zero for success |
