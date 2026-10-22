### P$DRAWROUNDBOX

The P$DRAWROUNDBOX library routine draws a box with rounded corners.

#### Syntax

```cobol
 CALL "P$DRAWROUNDBOX" USING [xPosition, yPosition]
                             [positionMode]
                             [positionUnits]
                             [sizeWidth, sizeHeight]
                             [sizeUnits]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *xPosition* | any numeric data item | Optional. X coordinate of the box. |
| *yPosition* | any numeric data item | Optional. Y coordinate of the box. |
| *positionMode* | PIC X(n) | Optional. Must contain “Absolute” |
| *positionUnits* | PIC X(n) | Optional. Can be either "Inches", "Metric", "Characters", or "Device Units".  This value should match with the value of *SizeUnits*. |
| *sizeWidth* | any numeric data item | Optional. Width of the box. |
| *sizeHeight* | any numeric data item | Optional. Height of the box. |
| *sizeUnits* | PIC X(n) | Optional. Can be either "Inches", "Metric", "Characters", or "Device Units". This value should match with the value of *PositionUnits*. |
