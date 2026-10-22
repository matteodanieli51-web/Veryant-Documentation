### R-DELETE-FUNCTION

This function deletes the specified record. It does not affect the current file position.

Syntax:

```cobol
 SET R-DELETE-FUNCTION TO TRUE

 CALL "R$IO" USING RIO-FUNCTION,
                   f
                   keyVal
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [R-OPEN-FUNCTION](./R-OPEN-FUNCTION). |
| *keyVal* | USAGE SIGNED-SHORT | Record number to delete. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
