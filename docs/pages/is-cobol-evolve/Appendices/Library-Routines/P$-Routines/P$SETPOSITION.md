### P$SETPOSITION

The P$SETPOSITION library routine sets the position for the next print operation.

#### Syntax

```cobol
 CALL "P$SETPOSITION" USING [xPosition]
                            [yPosition]
                            [mode]
                            [units]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *xPosition* | any numeric data item | Optional. X coordinate. |
| *yPosition* | any numeric data item | Optional. Y coordinate. |
| *mode* | PIC X(n) | Optional. Must contain “Absolute”. |
| *units* | PIC X(n) | Optional. Can be either "Inches", "Metric", "Characters", or "Device Units". |
