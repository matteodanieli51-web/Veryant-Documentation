### P$SETTEXTPOSITION

The P$SETTEXTPOSITION library routine sets the position for the next print operation adjusted from the top or bottom of the current font.

#### Syntax

```cobol
 CALL "P$SETTEXTPOSITION" USING [xPosition]
                                [yPosition]
                                [alignment]
                                [mode]
                                [units]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *xPosition* | any numeric data item | Optional. X coordinate. |
| *yPosition* | any numeric data item | Optional. Y coordinate. |
| *alignment* | PIC X(n) | Optional. Can be either “Top” or “Bottom”. |
| *mode* | PIC X(n) | Optional. Must contain “Absolute”. |
| *units* | PIC X(n) | Optional. Can be either "Inches", "Metric", "Characters", or "Device Units". |
