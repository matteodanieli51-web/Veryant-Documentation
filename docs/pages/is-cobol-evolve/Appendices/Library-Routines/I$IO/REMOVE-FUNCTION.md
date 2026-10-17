### REMOVE-FUNCTION

This function removes the indexed file from disk.

RETURN-CODE is set to ZERO on failure.

#### Syntax

```cobol
 SET REMOVE-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   name
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *name* | PIC X(n) | The name of the file to be removed. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
