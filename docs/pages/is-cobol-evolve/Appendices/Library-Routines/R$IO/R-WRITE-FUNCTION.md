### R-WRITE-FUNCTION

This function adds a new record to the relative file.

Syntax:

```cobol
 SET R-WRITE-FUNCTION TO TRUE

 CALL "R$IO" USING RIO-FUNCTION
                   f
                   recBuffer
                   lenght
                   keyVal
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [R-OPEN-FUNCTION](./R-OPEN-FUNCTION). |
| *recBuffer* | PIC X(n) | Alphanumeric data-item that contains the record to write. |
| *length* | USAGE SIGNED-SHORT | Number of bytes to write. |
| *keyVal* | USAGE SIGNED-SHORT | Record number to write. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
