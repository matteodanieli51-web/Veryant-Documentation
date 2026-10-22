### CREGEXP-RELEASE-MATCH

The CREGEXP-RELEASE-MATCH function frees memory that is allocated when [CREGEXP-MATCH](./CREGEXP-MATCH) is called.

#### Syntax

```cobol
 CALL "C$REGEXP" USING CREGEXP-RELEASE-MATCH
                       matchHandle
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CREGEXP-RELEASE-MATCH | Constant |  |
| *matchHandle* | USAGE HANDLE | The handle returned by [CREGEXP-MATCH](./CREGEXP-MATCH) |
