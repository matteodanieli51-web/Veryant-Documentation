### ROLLBACK-FUNCTION

This function rolls back all files affected to the state that they were in after the last completed transaction.

The ROLLBACK function has no parameters.

#### Syntax

```cobol
 SET ROLLBACK-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
            GIVING returnCode
```

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
