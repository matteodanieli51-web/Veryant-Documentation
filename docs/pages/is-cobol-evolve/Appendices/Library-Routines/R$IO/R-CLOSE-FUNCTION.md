### R-CLOSE-FUNCTION

This function closes an open file. It also removes currently held locks on the file.

Syntax:

```cobol
 SET R-CLOSE-FUNCTION TO TRUE

 CALL "R$IO" USING RIO-FUNCTION
                   f
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [R-OPEN-FUNCTION](./R-OPEN-FUNCTION) |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
