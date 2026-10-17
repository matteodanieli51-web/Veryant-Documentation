### P$SETTOPMARGIN

The P$SETTOPMARGIN library routine sets the top margin of the paper.

#### Syntax

```cobol
 CALL "P$SETTOPMARGIN" USING sizeHeight
                            [units]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *sizeHeight* | any numeric data item | Specifies the margin size |
| *Units* | PIC X(n) | Optional. Can be either "Inches", "Metric", or "Device Units". |
