### CSOCKET-FLUSH

This operation flushes any data in the socket.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-FLUSH
                       socketHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-FLUSH | Constant |  |
| *socketHandle* | USAGE HANDLE | Identifies the socket to be flushed. |
