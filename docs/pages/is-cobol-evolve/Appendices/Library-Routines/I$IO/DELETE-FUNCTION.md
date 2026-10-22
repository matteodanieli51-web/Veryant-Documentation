### DELETE-FUNCTION

This function deletes the record identified by the value found in the primary key area of the record. It does not affect the current file position or key of reference.

RETURN-CODE is set to zero on failure.

#### Syntax

```cobol
 SET DELETE-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   f
                   record
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | A valid file handle returned by [OPEN-FUNCTION](./OPEN-FUNCTION). |
| *record* | PIC X(n) | Points to the area to hold the record delete. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
