### IN-TRANSACTION-FUNCTION

This function returns a value indicating whether or not the program is currently in an unfinished transaction.

The IN-TRANSACTION function has no parameters.

RETURN-CODE is set to "1" if there is current and unfinished transaction or "0" otherwise.

**Note -** The isCOBOL implementation is independent from the current file handler. Every time the START TRANSACTION operation is invoked, then an environmental flag is set to true, while every time a COMMIT or ROLLBACK operation is called, the flag is set to false. No check on errors is performed. The function returns the value of the flag.

#### Syntax

```cobol
 SET IN-TRANSACTION-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
            GIVING returnCode
```

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | In transaction |
| 0 | Not in transaction |
