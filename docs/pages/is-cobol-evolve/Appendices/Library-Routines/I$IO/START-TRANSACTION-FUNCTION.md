### START-TRANSACTION-FUNCTION

This function initiates a transaction.

The START-TRANSACTION function has no parameters.

#### Syntax

```cobol
 SET START-TRANSACTION-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
            GIVING returnCode
```

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
