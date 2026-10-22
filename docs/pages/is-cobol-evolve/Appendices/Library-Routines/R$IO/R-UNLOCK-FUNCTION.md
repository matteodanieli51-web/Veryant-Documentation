### R-UNLOCK-FUNCTION

This function unlocks any locked records held by the current process in the specified file.

Syntax:

```cobol
 SET R-UNLOCK-FUNCTION TO TRUE

 CALL "R$IO" USING RIO-FUNCTION
                   f
            GIVING ReturnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [R-OPEN-FUNCTION](./R-OPEN-FUNCTION). |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
