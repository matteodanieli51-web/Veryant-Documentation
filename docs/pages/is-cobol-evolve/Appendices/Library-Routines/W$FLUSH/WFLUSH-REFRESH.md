### WFLUSH-REFRESH

The WFLUSH-REFRESH op-code causes the screen to be refreshed. This is useful if you want to update the video before the client/server timeout ([iscobol.gui.cstimeout \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties)) expires or the client/sever maximum buffer size ([iscobol.gui.csmaxbuffersize \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties)) is reached.

#### Syntax:

```cobol
 CALL "W$FLUSH" USING WFLUSH-REFRESH
                     [windowHandle]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WFLUSH-REFRESH* | Constant |  |
| *windowHandle* | HANDLE OF WINDOW | Optional. Specifies the window you whish to refresh. If omitted, then all windows are refreshed. |
