### COMMIT-TRANSACTION-FUNCTION

This function commits all changes and releases all locks, ending a transaction.

#### Syntax

```cobol
 SET COMMIT-TRANSACTION-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   context
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *context* | PIC 9(n) | Indicates the transaction context. Refer to the file handler documentation for the list of possible values.<br>**Note -** c-treeRTG ignores this parameter. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
