### UNLOCK-FUNCTION

This function unlocks any locked records held by the current process in the passed file. It does not affect the current file position or key of reference.

This function will not unlock any records if it is called during a transaction. [COMMIT-TRANSACTION-FUNCTION](./COMMIT-TRANSACTION-FUNCTION) should be used instead.

RETURN-CODE is set to zero on failure.

#### Syntax

```cobol
 SET UNLOCK-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   f
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | A valid file handle returned by [OPEN-FUNCTION](./OPEN-FUNCTION). |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
