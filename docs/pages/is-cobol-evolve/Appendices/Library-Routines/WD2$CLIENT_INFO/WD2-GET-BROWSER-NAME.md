### WD2-GET-BROWSER-NAME

The WD2-BROWSER-NAME function returns the name of the web browser.

#### Syntax:

```cobol
 CALL "WD2$CLIENT_INFO" USING WD2-GET-BROWSER-NAME
                              browserName
                       GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WD2-GET-BROWSER-NAME* | CONSTANT |  |
| *browserName* | PIC X(n) | Receives the browser name.<br>For example, using Mozilla Firefox, the result is “*firefox*”. |

#### Return code:

|  |  |
| --- | --- |
| 0 | operation successful |
| -1 | running outside WebDirect environment |
