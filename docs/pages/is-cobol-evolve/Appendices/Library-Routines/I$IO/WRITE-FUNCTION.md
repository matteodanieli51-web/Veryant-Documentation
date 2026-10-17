### WRITE-FUNCTION

This function adds a new record to the passed file.

If this function succeeds, RETURN-CODE is set to the size of record written. RETURN-CODE is set to zero on failure.

#### Syntax

```cobol
 SET WRITE-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   f
                   record
                   size
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | A valid file handle returned by [OPEN-FUNCTION](./OPEN-FUNCTION). |
| *record* | PIC X(n) | Points to the record to add. |
| *size* | USAGE SIGNED-SHORT | The size of the record. If size is zero, then the maximum record size for the file is used. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
