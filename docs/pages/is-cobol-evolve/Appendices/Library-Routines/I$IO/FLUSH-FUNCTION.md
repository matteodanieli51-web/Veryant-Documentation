### FLUSH-FUNCTION

This function causes all file buffers to be flushed to disk.

#### Syntax

```cobol
 SET FLUSH-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   allFiles
            GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *allFiles* | USAGE BIT | Bit value. Can be set to one of the following values (defined in [isfilesys.def](../../Copybooks/isfilesys.def)): |  |
|  |  | FA-MASS-UPDATE | if all_files and FA-MASS-UPDATE are not 0, then MASS-UPDATE files should be synced. |
|  |  | FA-REMOTE | if all_files and FA-REMOTE are not 0, then remote files should be synced. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
