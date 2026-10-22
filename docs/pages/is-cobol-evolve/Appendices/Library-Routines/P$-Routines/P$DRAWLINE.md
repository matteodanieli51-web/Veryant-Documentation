### P$DRAWLINE

The P$DRAWLINE library routine draws a line.

#### Syntax

```cobol
 CALL "P$DRAWLINE" USING [x1Point, y1Point]
                         [point1Mode]
                         [point1Units]
                         [x2Point, y2Point]
                         [point2Mode]
                         [point2Units]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *x1Point* | any numeric data item | Optional. X coordinate where the line starts. |
| *y1Point* | any numeric data item | Optional. Y coordinate where the line starts. |
| *point1Mode* | PIC X(n) | Optional. Must contain “Absolute” |
| *point1Units* | PIC X(n) | Optional. Can be either "Inches", "Metric", "Characters", or "Device Units".  This value should match with the value of *Point2Units*. |
| *x2Point* | any numeric data item | Optional. X coordinate where the line ends. |
| *y2Point* | any numeric data item | Optional. Y coordinate where the line ends. |
| *point2Mode* | PIC X(n) | Optional. Must contain “Absolute” |
| *point2Units* | PIC X(n) | Optional. Can be either "Inches", "Metric", "Characters", or "Device Units". This value should match with the value of *Point1Units*. |
