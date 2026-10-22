### S-REWRITE-FUNCTION

This function rewrites a record in the sequential file. It does not change the current file position.

Syntax:

```cobol
 SET S-REWRITE-FUNCTION TO TRUE

 CALL "S$IO" USING SIO-FUNCTION
                   f
                   recBuffer
                   lenght
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [S-OPEN-FUNCTION](./S-OPEN-FUNCTION). |
| *recBuffer* | PIC X(n) | Alphanumeric data-item that contains the new record data. |
| *length* | USAGE SIGNED-SHORT | Number of bytes to write. It may be zero to indicate the maximum record size for the file. The size of the new record need not match the size of the existing record. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
