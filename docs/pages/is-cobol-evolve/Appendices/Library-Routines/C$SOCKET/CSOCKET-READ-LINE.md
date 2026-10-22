### CSOCKET-READ-LINE

This operation reads a line of data from a socket. A line is defined as a block of characters terminated by either new line (0x0A) or carriage return (0x0D). It blocks other calls until all the data requested is actually read, an error occurs or the read timeout expires.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-READ-LINE
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
| *length* | PIC 9(n) | Number of bytes to be read.<br>Setting this parameter to zero allows you to know how many bytes are available on the socket.<br>If the buffer passed is smaller than the value of this parameter, or if the number of bytes available on the socket is less than the value of this parameter, an error will result. Due to this rule, *buffer* picture can’t be *x any length*. |
| *timeout* | PIC 9(n) | Optional parameter. It specifies the amount of milliseconds that C$SOCKET has to wait before returning if less data than the amount specified by *length* is available  on the socket. When the timeout expires, *buffer* is set to the available data. If the parameter is omitted, then C$SOCKET waits until the number of bytes specified by *length* has been read. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <0 | Operation failed. |
| >0 | Number of read bytes, not including the carriage return and line feed. |
