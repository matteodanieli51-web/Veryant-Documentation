### R-REWRITE-FUNCTION

This function rewrites a record in the relative file. It doesn’t change the file position.

Syntax:

```cobol
 SET R-REWRITE-FUNCTION TO TRUE

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
| *recBuffer* | PIC X(n) | an alphanumeric data-item that contains the new record data. |
| *length* | USAGE SIGNED-SHORT | Number of bytes to write. |
| *keyVal* | USAGE SIGNED-SHORT | Record number to write. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
