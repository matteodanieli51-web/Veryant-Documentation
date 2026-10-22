### CLOSE-FUNCTION

This function closes an opened file.

It also removes currently held locks on the file.

#### Syntax

```cobol
 SET CLOSE-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   f
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [OPEN-FUNCTION](./OPEN-FUNCTION). |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
