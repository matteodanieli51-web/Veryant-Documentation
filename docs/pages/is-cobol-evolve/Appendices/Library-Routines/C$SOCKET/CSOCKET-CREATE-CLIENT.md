### CSOCKET-CREATE-CLIENT

This operation attempts to connect to a server.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-CREATE-CLIENT
                       portNumber
                       serverName
                GIVING clientHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-CREATE-CLIENT | Constant |  |
| *portNumber* | PIC 9 (n) | Numeric value specifying the port on which the socket is created. |
| *serverName* | PIC X(n) | The machine name or ip address of the server. |
| *clientHandle* | USAGE HANDLE | Handle of the client or zero if operation fails. |

**Note:** the SO_KEEPALIVE attribute for the socket between client and server is configurable through the property [iscobol.csocket.keepalive (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) .
