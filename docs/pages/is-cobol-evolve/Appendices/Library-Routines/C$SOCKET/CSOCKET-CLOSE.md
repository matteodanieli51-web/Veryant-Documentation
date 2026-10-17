### CSOCKET-CLOSE

This operation closes a socket handle.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-CLOSE
                       socketHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-CLOSE | Constant |  |
| *socketHandle* | USAGE HANDLE | Identifies an existing socket created by CSOCKET-CREATE-SERVER or CSOCKET-CREATE-CLIENT functions. |
