### CDESKTOP-BROWSE

The CDESKTOP-BROWSE function opens a web browser or the system file explorer in order to browse for a URI.

#### Syntax:

```cobol
 CALL "C$DESKTOP" USING CDESKTOP-BROWSE
                        URI
                       [csFlag]
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CDESKTOP-BROWSE | Constant |  |
| *URI* | PIC X(n) | Specifies the URI to browse for.<br>The parameter value must include the protocol.<br>Some examples:<br>"https://www.veryant.com" (navigate to the Veryant website)<br>"file://C:/Temp" (show content of C:\Temp) |
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
