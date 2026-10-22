### CSOCKET-ACCEPT

This operation waits for a connection from a client. It blocks other calls while waiting, and returns only after a client has attempted to connect.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-ACCEPT
                       serverHandle
                GIVING socketHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-ACCEPT | Constant |  |
| *serverHandle* | USAGE HANDLE | Handle returned by a call from CSOCKET-CREATE-SERVER. |
| *socketHandle* | USAGE HANDLE | Handle of the first client that connects. |
