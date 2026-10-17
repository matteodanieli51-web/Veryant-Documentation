### CSOCKET-NEXT-READ

This operation allows you to write multi-client servers. This operation waits until data is ready to be read from one of the sockets your server has created.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-NEXT-READ
                       serverHandle
                       timeout
                GIVING socketHandle
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| CSOCKET-NEXT-READ | Constant |  |  |
| *serverHandle* | USAGE HANDLE | Handle of a server created by CSOCKET-CREATE-SERVER. |  |
| *timeout* | PIC S9(n) | Valid values: | -1     returns only when the socket is available. |
|  |  |  | 0     check and returns event if a socket is not available. |
|  |  |  | >0    number of milliseconds to wait before returning. |
| *socketHandle* | USAGE HANDLE | Handle of the next readable socket, or zero if no socket is available. |  |
