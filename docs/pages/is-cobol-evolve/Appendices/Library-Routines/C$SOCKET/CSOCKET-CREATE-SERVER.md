### CSOCKET-CREATE-SERVER

This operation creates a server-side socket.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-CREATE-SERVER
                       portNumber
                GIVING serverHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-CREATE-SERVER | Constant |  |
| *portNumber* | PIC 9 (n) | Numeric value specifying the port on which the socket is created. |
| *serverHandle* | USAGE HANDLE | Handle of the server or zero if operation fails. |

**Note:** the SO_REUSEADDR attribute is configurable through the property [iscobol.csocket.reuseaddr (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) .
