### S-WRITE-FUNCTION

This function adds a new record to the sequential file.

Syntax:

```cobol
 SET S-WRITE-FUNCTION TO TRUE

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
| *recBuffer* | PIC X(n) | Alphanumeric data-item that contains the record to write. |
| *length* | USAGE SIGNED-SHORT | Number of bytes to write.  If zero, then the maximum record size for the file is used. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
