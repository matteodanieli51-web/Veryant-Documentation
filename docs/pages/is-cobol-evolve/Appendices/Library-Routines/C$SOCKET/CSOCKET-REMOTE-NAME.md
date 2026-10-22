### CSOCKET-REMOTE-NAME

This operation returns the name of a remote machine.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-REMOTE-NAME
                       socketHandle
                       remoteName
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-REMOTE-NAME | Constant |  |
| *socketHandle* | USAGE HANDLE | Identifies the socket to be inquired. |
| *remoteName* | PIC X(n) | Returns the name of the host machine. |
