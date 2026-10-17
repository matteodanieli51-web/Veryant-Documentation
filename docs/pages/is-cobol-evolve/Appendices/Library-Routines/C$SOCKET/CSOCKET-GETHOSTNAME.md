### CSOCKET-GETHOSTNAME

This operation allows the COBOL program to get the name of the host machine on which the COBOL program is executing.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-GETHOSTNAME
                       hostName
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-GETHOSTNAME | Constant |  |
| *hostName* | PIC X(n) | Returns the name of the host machine. |
