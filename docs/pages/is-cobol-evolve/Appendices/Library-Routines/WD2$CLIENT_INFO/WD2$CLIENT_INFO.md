## WD2$CLIENT_INFO

The WD2$CLIENT_INFO library routine returns information about the web browser. It can be used only in WebDirect environment.

### Syntax:

```cobol
 CALL "WD2$CLIENT_INFO" USING opCode
                              parameter
                       GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | PIC 9 | Function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |
|  | [WD2-GET-USER-AGENT](./WD2-GET-USER-AGENT) | Returns the user agent http header |
|  | [WD2-GET-BROWSER-NAME](./WD2-GET-BROWSER-NAME) | Returns the browser name |
| *parameter* | PIC X(n) | Parameter depends on the opcode. |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** Get Browser and Agent from client (this works only on WebDirect)

```cobol
*> On working-storage copy "isgui.def"

call "WD2$CLIENT_INFO" using wd2-get-browser-name
                             browser-info
call "WD2$CLIENT_INFO" using wd2-get-user-agent
                             user-agent
display message user-agent X"0D0A" browser-info.
```
