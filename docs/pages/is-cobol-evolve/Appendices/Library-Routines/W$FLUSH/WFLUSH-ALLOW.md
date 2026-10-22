### WFLUSH-ALLOW

The WFLUSH-ALLOW op-code stops the bufferization of INQUIRE statements, if this bufferization is active, and then sends all the bufferized data to the client.

#### Syntax:

```cobol
 CALL "W$FLUSH" USING WFLUSH-ALLOW
                      windowHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WFLUSH-ALLOW* | Constant |  |
| *windowHandle* | HANDLE OF WINDOW | Specifies the window where you wish to stop the INQUIRE statements bufferization and send the bufferized data. |
