### P$TEXTOUT

The P$TEXTOUT library routine prints some text.

#### Syntax

```cobol
 CALL "P$TEXTOUT" USING text
                       [xPosition]
                       [yPosition]
                       [mode]
                       [units]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *text* | PIC X(n) | Specifies the text to print. |
| *xPosition* | any numeric data item | Optional. X coordinate of the text. |
| *yPosition* | any numeric data item | Optional. Y coordinate of the text. |
| *mode* | PIC X(n) | Optional. Must contain “Absolute”. |
| *units* | PIC X(n) | Optional. Can be either "Inches", "Metric", "Characters", or "Device Units". |
