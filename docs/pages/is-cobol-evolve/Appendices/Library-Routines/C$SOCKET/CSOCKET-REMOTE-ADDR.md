### CSOCKET-REMOTE-ADDR

This operation returns the IP address of a remote machine.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-REMOTE-ADDR
                       socketHandle
                       remoteName
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-REMOTE-ADDR | Constant |  |
| *socketHandle* | USAGE HANDLE | Identifies the socket to be inquired. |
| *remoteName* | PIC X(n) | Returns the IP address of the host machine. |
