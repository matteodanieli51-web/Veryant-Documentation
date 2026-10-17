### CSOCKET-WRITE

This operation writes data to a socket, either from the client to the server, or from the server to the client.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-WRITE
                       socketHandle
                       buffer
                       length
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-WRITE | Constant |  |
| *socketHandle* | USAGE HANDLE | Identifies the socket in which data will be written. |
| *buffer* | PIC X(n) | Data to write into socket. |
| *length* | PIC 9(n) | Optional. Number of bytes to write. A length of zero causes the entire buffer to be written into the socket. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <0 | Operation failed. |
| >0 | Number of written bytes. |
