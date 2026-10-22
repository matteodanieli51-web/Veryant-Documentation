### CSOCKET-EMPTY

This operation is similar to CSOCKET-READ, except that the number of bytes is thrown away, rather than being stored.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-EMPTY
                       socketHandle
                       length
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-EMPTY | Constant |  |
| *socketHandle* | USAGE HANDLE | Identifies the socket to be emptied. |
| *length* | PIC 9(n) | Number of bytes to be thrown away. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <0 | Operation failed. |
| >0 | Number of skipped bytes. |
