### OPENSAVE-SUPPORTED

The OPENSAVE-SUPPORTED function checks if the host system supports the C$OPENSAVEBOX library routine.

#### Syntax:

```cobol
 CALL "C$OPENSAVEBOX" USING OPENSAVE-SUPPORTED
                     GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| OPENSAVE-SUPPORTED | Constant |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | The C$OPENSAVEBOX library routine is supported by the host operating system. |
| -1 | The C$OPENSAVEBOX library routine is not supported by the host operating system. |
