### PARSEEFD-RELEASE

The PARSEEFD-RELEASE function frees all memory associated with the EFD.

#### Syntax:

```cobol
 CALL "C$PARSEEFD" USING PARSEEFD-RELEASE
                         efdHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *PARSEEFD-RELEASE* | Constant |  |
| efdHandle | USAGE HANDLE | Handle returned by the [PARSEEFD-PARSE](./PARSEEFD-PARSE) function. |
