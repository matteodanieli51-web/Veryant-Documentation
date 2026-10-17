### WD2-GET-USER-AGENT

The WD2-GET-USER-AGENT function returns the user agent http header.

#### Syntax:

```cobol
 CALL "WD2$CLIENT_INFO" USING WD2-GET-USER-AGENT
                              userAgent
                       GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WD2-GET-USER-AGENT* | CONSTANT |  |
| *userAgent* | PIC X(n) | Receives the user agent.<br>For example, using Mozilla Firefox, the result is something like “*mozilla/4.0 (compatible; msie 7.0; windows nt 6.0; slcc1; .net clr 2.0.50727; media center pc 5.0; .net clr 3.5.30729; .net clr 3.0.30618)*” |

#### Return code:

|  |  |
| --- | --- |
| 0 | operation successful |
| -1 | running outside WebDirect environment |
