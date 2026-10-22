### CSOCKET-READ

This operation reads data from a socket. It blocks other calls until all the data requested is actually read, an error occurs or the read timeout expires.

If the socket is closed by the other peer before the entire buffer is filled, C$SOCKET will return the number of bytes read to that point, which will be less than the amount requested. The next time CSOCKET-READ is called, -1 will be returned.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-READ
                       socketHandle
                       buffer
                       length
                       [timeout]
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-READ | Constant |  |
| *socketHandle* | USAGE HANDLE | Identifies the socket to be read. |
| *buffer* | PIC X(n) | Data to read from socket. |
| *length* | PIC 9(n) | When set to zero, return code is set to the number of bytes available on the socket.  After calling CSOCKET-READ with a length of 0, you can call CSOCKET-READ again with a length equal to the previous return value to read all the data available without being blocked or generating an error.<br>When set to a value greater than zero, it specifies the number of bytes to be read.<br>If the buffer passed is smaller than the value of this parameter, or if the number of bytes available on the socket is less than the value of this parameter, an error will result. Due to this rule, *buffer* picture can’t be  ANY LENGTH |
| *timeout* | PIC 9(n) | Optional parameter. It specifies the amount of milliseconds that C$SOCKET has to wait before returning if less data than the amount specified by *length* is available  on the socket. When the timeout expires, *buffer* is set to the available data. If the parameter is omitted, then C$SOCKET waits until the number of bytes specified by *length* has been read. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <0 | Operation failed. |
| >0 | Number of bytes read. |
