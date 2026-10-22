### P$SETPITCH

The P$SETPITCH library routine sets normal, compressed or expanded font pitch.

#### Syntax

```cobol
 CALL "P$SETPITCH" USING  type
                       [factor]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *type* | any alphabetic or alphanumeric data item | Specifies “Normal”, “Compressed” or “Expanded”.<br>Only the first letter is relevant and it’s case-insensitive. |
| *factor* | any numeric data item | Optional. Specifies the compression/expansion ratio.<br>If omitted, the following defaults are used:<br>- default compressione ratio: 1.65<br>- default expansion ratio: 2.00 |
