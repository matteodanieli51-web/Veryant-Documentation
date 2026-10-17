### CREGEXP-GETMATCH

The CREGEXP-GETMATCH function returns a set of indices into a string passed to [CREGEXP-MATCH](./CREGEXP-MATCH) that match the subexpression of the regular expression.

#### Syntax

```cobol
 CALL "C$REGEXP" USING CREGEXP-GETMATCH
                       matchHandle
                       group
                       idxStart
                       idxEnd
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CREGEXP-GETMATCH | Constant |  |
| *matchHandle* | USAGE HANDLE | The handle returned by [CREGEXP-MATCH](./CREGEXP-MATCH) |
| *group* | PIC 9(n) | A number between 1 and the value returned by [CREGEXP-NUMGROUPS](./CREGEXP-NUMGROUPS) |
| *idxStart* | PIC 9(n) | Returns an index to the beginning of the string that matches the subexpression of the regular expression |
| *idxEnd* | PIC 9(n) | Returns an index to the end of the string that matches the subexpression of the regular expression |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation failed.<br>Call the [CREGEXP-LAST-ERROR](./CREGEXP-LAST-ERROR) function for more details. |
| 1 | Operation successful. |
