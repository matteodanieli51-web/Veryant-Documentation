### CREGEXP-GET-LEVEL

The CREGEXP-GET-LEVEL function  indicates whether regular expressions are supported on the host.

#### Syntax

```cobol
 CALL "C$REGEXP" USING CREGEXP-GET-LEVEL
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CREGEXP-GET-LEVEL | Constant |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Regular expression processing is not available |
| >0 | Regular expression processing is supported |
