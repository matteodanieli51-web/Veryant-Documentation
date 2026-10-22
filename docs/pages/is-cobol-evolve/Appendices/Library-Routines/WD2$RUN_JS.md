## WD2$RUN_JS

The WD2$RUN_JS library routine executes JavaScript code. It can be used only in WebDirect environment.

The routine sends a html snippet that includes a <script\> tag to the browser that will interpret it. Calling this routine to execute JavaScript code is suggested only if you need to include js files in the code, otherwise it is prefereable to call [WD2$EXECJS](./WD2$EXECJS).

**Note -** if you use this routine to redirect the browser to a file created by the COBOL program (e.g. a PDF printed by the program) and you wish to specify a relative path to the file in your JavaScript, be aware that the relative path for the JavaScript doesn’t always match with the relative path used by the COBOL program. When you run your programs from the IDE the relative paths match between COBOL program and JavaScript. Instead, when you deploy your programs in a servlet container (e.g. Tomcat), JavaScript appends the relative path to the webapp main folder while the COBOL program appends them to the servlet container working directory.

### Syntax:

```cobol
 CALL "WD2$RUN_JS" USING jsCode
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *jsCode* | PIC X(n) | Specifies the JavaScript code to execute. The code must be included in a <script\> html tag.<br>If you include a js file in the Java Script code, the file name in the src attribute must being with / and the js file must be placed in the webapp root folder.  Example: |

### Return code:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Operation failed. Possible causes:<br>• Invalid or missing parameter<br>• Running outside WebDirect environment |

### Examples:

**Example -** Run some Java Script code (this works only on WebDirect)

```cobol
call "wd2$run_js" using
 "<script type=""text/javascript"" src=""/functions.js"">function1()</script>"
```
