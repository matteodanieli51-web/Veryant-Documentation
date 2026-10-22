### R-START-FUNCTION

This function positions the file pointer for the next [R-NEXT-FUNCTION](./R-NEXT-FUNCTION) or [R-PREVIOUS-FUNCTION](./R-PREVIOUS-FUNCTION).

Syntax:

```cobol
 SET R-START-FUNCTION TO TRUE

 CALL "R$IO" USING RIO-FUNCTION
                   f
                   keyVal
                   mode
            GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [R-OPEN-FUNCTION](./R-OPEN-FUNCTION). |  |
| *keyVal* | *USAGE SIGNED-SHORT* | The record number of the record at which to start. |  |
| *mode* | *USAGE SIGNED-SHORT* | One of the following values (defined in [isfilesys.def](../../Copybooks/isfilesys.def)): |  |
|  |  | F_EQUALS<br>F_NOT_LESS<br>F_GREATER<br>F_LESS<br>F_NOT_GREATER | start at the specified key<br>start at the specified key, or the one after<br>start at the record beyond the specified key<br>start at the record before the specified key<br>start at the specified key, or the one before |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
