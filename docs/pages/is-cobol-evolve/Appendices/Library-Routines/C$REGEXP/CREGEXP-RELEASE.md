### CREGEXP-RELEASE

The CREGEXP-RELEASE function frees memory that is allocated when [CREGEXP-COMPILE](./CREGEXP-COMPILE) is called.

#### Syntax

```cobol
 CALL "C$REGEXP" USING CREGEXP-RELEASE
                       regexpHandle
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CREGEXP-RELEASE-MATCH | Constant |  |
| *regexpHandle* | USAGE HANDLE | The handle returned by [CREGEXP-COMPILE](./CREGEXP-COMPILE) |
