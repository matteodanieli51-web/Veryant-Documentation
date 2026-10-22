## WD2$REDIRECT

The WD2$REDIRECT library routine redirects the browser to a new page or resource. It can be used only in WebDirect environment.

**Note -** if you use this routine to redirect the browser to a file created by the COBOL program (e.g. a PDF printed by the program) and you wish to specify a relative path to the file in your JavaScript, be aware that the relative path for the JavaScript doesn’t always match with the relative path used by the COBOL program. When you run your programs from the IDE the relative paths match between COBOL program and JavaScript. Instead, when you deploy your programs in a servlet container (e.g. Tomcat), JavaScript appends the relative path to the webapp main folder while the COBOL program appends them to the servlet container working directory.

### Syntax:

```cobol
 CALL "WD2$REDIRECT" USING newURL
                          [target]
                    GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *newURL* | PIC X(n) | Specifies the link to the resource to be opened. It can be a link to a website, such as "https://www.veryant.com" or a link to a file, such as "resources/pdf_file.pdf". |
| *target* | PIC X(n) | Optional parameter. It specifies the target where to open the document, and it can be any value accepted for an <a\> html tag.<br>Valid values are:<br>"_blank"<br>"_parent"<br>"_self"<br>"_top"<br>*framename* (the name o a frame in a frameset).<br>If omitted, then "_blank" is assumed as default. |

### Return code:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | The redirect function is not available (program not running in a WebDirect environment) |
| -2 | Invalid or missing parameter. |

### Examples:

**Example -** Redirect to the Veryant’s web site

```cobol
call "wd2$redirect" using "https://www.veryant.com" "_self"
```
