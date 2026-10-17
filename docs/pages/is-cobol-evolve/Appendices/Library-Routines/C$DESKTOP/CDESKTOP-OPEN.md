### CDESKTOP-OPEN

The CDESKTOP-OPEN function opens a file with the associated application.

#### Syntax:

```cobol
 CALL "C$DESKTOP" USING CDESKTOP-OPEN
                        fileName
                       [csFlag]
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CDESKTOP-OPEN | Constant |  |
| *fileName* | PIC X(n) | Specifies the name of the file to open. It can be either a relative or a full pathname. |
| *csFlag* | PIC 9 | Optional parameter evaluated in thin client environment. If it is set to 1, the file is opened on the client, otherwise it is opened on the server.<br>In order to open the file on the client, the routine downloads it in the user temp directory on the client machine, then it opens it from there.<br>Set this flag to 1 only if the file resides on the server and you want to open it on the client. If the file reside on the client, call C$DESKTOP with CALL CLIENT statement and omit this flag. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Unsupported operation or routine not supported in this context. This is returned for example if the routine is called in WebDirect environment. |
| -2 | Invalid or missing parameters. |
| -3 | I/O error. This is returned for example when the file is not found. |
| -4 | A Security exception occured. |
