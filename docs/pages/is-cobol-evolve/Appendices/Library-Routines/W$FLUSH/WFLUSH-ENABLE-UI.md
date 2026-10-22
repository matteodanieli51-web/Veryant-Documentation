### WFLUSH-ENABLE-UI

The WFLUSH-ENABLE-UI op-code restores the standard management of User Interface updates. Every DESTROY, DISPLAY, MODIFY and INQUIRE performed after this call will be managed by the runtime.

#### Syntax:

```cobol
 CALL "W$FLUSH" USING WFLUSH-ENABLE-UI
                     [windowHandle]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WFLUSH-ENABLE-UI* | Constant |  |
| *windowHandle* | HANDLE OF WINDOW | Optional. Specifies the window where you wish to enable the UI management. |
