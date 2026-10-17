### CREGEXP-NUMGROUPS

The CREGEXP-NUMGROUPS function returns the number of substrings that matched any subgroups in the regular expression.

#### Syntax

```cobol
 CALL "C$REGEXP" USING CREGEXP-NUMGROUPS
                       matchHandle
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CREGEXP-NUMGROUPS | Constant |  |
| *matchHandle* | USAGE HANDLE | The handle returned by [CREGEXP-MATCH](./CREGEXP-MATCH) |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation failed.<br>Call the [CREGEXP-LAST-ERROR](./CREGEXP-LAST-ERROR) function for more details. |
| >0 | Number of matches found. |
