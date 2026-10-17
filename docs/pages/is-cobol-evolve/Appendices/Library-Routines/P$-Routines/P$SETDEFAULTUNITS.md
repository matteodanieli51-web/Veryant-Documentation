### P$SETDEFAULTUNITS

The P$SETDEFAULTUNITS library routine changes the default measurement unit for positions and sizes.

#### Syntax

```cobol
 CALL "P$SETDEFAULTUNITS" USING units
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *units* | PIC X(n) | Can be either "Inches", "Metric", "Characters", or "Device Units". |
