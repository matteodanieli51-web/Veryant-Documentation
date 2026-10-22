### CREGEXP-LAST-ERROR

The CREGEXP-LAST-ERROR function returns the last error code and error message returned by a call to the C$REGEXP routine.

#### Syntax

```cobol
 CALL "C$REGEXP" USING CREGEXP-LAST-ERROR
                      [errorDesc]
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CREGEXP-LAST-ERROR | Constant |  |
| *errorDesc* | PIC X(n) | (Optional) receives the error message text. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | No error |
| >0 | Regexp error code.<br>Check the *erroDesc* text for more details on the error. |
