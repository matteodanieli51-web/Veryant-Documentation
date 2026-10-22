### S-CLOSE-FUNCTION

This function closes an open file. It also removes currently held locks on the file.

Syntax:

```cobol
 SET S-CLOSE-FUNCTION TO TRUE

 CALL "S$IO" USING SIO-FUNCTION
                   f
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [S-OPEN-FUNCTION](./S-OPEN-FUNCTION) |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
