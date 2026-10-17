### REWRITE-FUNCTION

This function replaces an existing record in the file.

If this function succeeds, RETURN-CODE is set to the size of record written. RETURN-CODE is set to zero on failure.

#### Syntax

```cobol
 SET REWRITE-FUNCTION TO TRUE

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
| *record* | PIC X(n) | Points to the new record to place in the file. |
| *size* | USAGE SIGNED-SHORT | May be zero to indicate the maximum record size for the file.<br>The record replaced is specified by the primary key value found in record.<br>The size of the new record need not match the size of the existing record. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
