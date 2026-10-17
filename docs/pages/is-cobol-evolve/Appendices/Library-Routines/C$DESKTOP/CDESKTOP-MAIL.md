### CDESKTOP-MAIL

The CDESKTOP-MAIL function opens the email client software in "new message" mode, with some fields already filled.

#### Syntax:

```cobol
 CALL "C$DESKTOP" USING CDESKTOP-MAIL
                        URI
                       [csFlag]
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CDESKTOP-MAIL | Constant |  |
| *URI* | PIC X(n) | Mailto URI including the values for the mail fields.<br>The parameter value must include the protocol.<br>Example:<br>"mailto://support@veryant.com" (send an email to support@veryant.com) |
| *csFlag* | PIC 9 | Optional parameter evaluated in thin client environment. If it is set to 1, the operation is executed on the client, otherwise it is executed on the server. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Unsupported operation or routine not supported in this context. This is returned for example if the routine is called in WebDirect environment. |
| -2 | Invalid or missing parameters. |
| -3 | I/O error. |
| -4 | A Security exception occured. |
