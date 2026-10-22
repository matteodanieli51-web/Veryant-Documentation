### WFLUSH-DISABLE-UI

The WFLUSH-DISABLE-UI op-code makes the runtime ignoring all statements that affect the User Interface. Every DESTROY, DISPLAY, MODIFY and INQUIRE performed after this call will be skipped. This kind of operation is useful to speed up performance during processing where there is no need to update the User Interface and you don’t want to review the program logic to manually remove the useless UI statements.

Use [WFLUSH-ENABLE-UI](./WFLUSH-ENABLE-UI) to restore the management of UI statements.

#### Syntax:

```cobol
 CALL "W$FLUSH" USING WFLUSH-DISABLE-UI
                     [windowHandle]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WFLUSH-DISABLE-UI* | Constant |  |
| *windowHandle* | HANDLE OF WINDOW | Optional. Specifies the window where you wish to disable the UI management |
