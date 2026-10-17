## WD2$EXECJS

The WD2$EXECJS library routine executes JavaScript code. It can be used only in WebDirect environment.

**Note -** if you use this routine to redirect the browser to a file created by the COBOL program (e.g. a PDF printed by the program) and you wish to specify a relative path to the file in your JavaScript, be aware that the relative path for the JavaScript doesn’t always match with the relative path used by the COBOL program. When you run your programs from the IDE the relative paths match between COBOL program and JavaScript. Instead, when you deploy your programs in a servlet container (e.g. Tomcat), JavaScript appends the relative path to the webapp main folder while the COBOL program appends them to the servlet container working directory.

### Syntax:

```cobol
 CALL "WD2$EXECJS" USING jsCode
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *jsCode* | PIC X(n) | Specifies the JavaScript code to execute.<br>It must be pure JavaScript code without any decoration. |

### Return code:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Operation failed. Possible causes:<br>• Invalid or missing parameter<br>• Running outside WebDirect environment |

### Examples:

**Example -** Show an alert message via JavaScript (this works only on WebDirect)

```cobol
call "wd2$execjs" using "function display_alert(message) { alert (message);  } display_alert('Hello world');"
```
