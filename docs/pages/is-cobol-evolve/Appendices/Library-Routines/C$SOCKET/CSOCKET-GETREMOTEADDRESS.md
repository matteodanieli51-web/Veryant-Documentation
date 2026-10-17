### CSOCKET-GETREMOTEADDRESS

This operation returns the hostname, IP address and port of the endpoint to which this socket is connected.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-GETREMOTEADDRESS
                       socketHandle
                       CSOCKET-REMOTE-ADDRESS
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-GETREMOTEADDRESS | Constant |  |
| *socketHandle* | USAGE HANDLE | Identifies the socket to be inquired. |
| CSOCKET-REMOTE-ADDRESS | Group item | Structure that receives the information. This group item, defined in [issocket.def](../../Copybooks/Copybooks), has the following structure: |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation succeeded |
| 1 | Operation failed |
