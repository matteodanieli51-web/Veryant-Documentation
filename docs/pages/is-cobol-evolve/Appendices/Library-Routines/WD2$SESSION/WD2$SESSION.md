## WD2$SESSION

The WD2$SESSION library routine manages session fields allowing to share information between JSP and WebDirect. It can be used only in WebDirect environment.

### Syntax:

```cobol
 CALL "WD2$SESSION" USING opCode
                          parameters
                   GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | PIC 9 | It is the function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are:<br>[WD2-GET-SESSION-VALUE](./WD2-GET-SESSION-VALUE)  retrieves a session value<br>[WD2-PUT-SESSION-VALUE](./WD2-PUT-SESSION-VALUE)  sets a session value |
| *parameters* | PIC X(n) | Parameters depends on the opcode. |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** Get the screen width (this works on WebDirect only)

```cobol
*> on working-storage copy "isgui.def"
*> g-field and g-value are pic x(n)

move "iscobol.wd2.on_client_info.screen.width" to g-field
call "wd2$session" using wd2-get-session-value
     g-field, g-value
*> display message "Screen width is " g-value
```

**Example -** Set the session username (this works on WebDirect only)

```cobol
*> on working-storage copy "isgui.def"
*> ws-user-name, s-field and s-value are pic x(n)

move "wd2.username" to s-field
move ws-user-name   to s-value
call "wd2$session" using wd2-put-session-value
     s-field, s-value.
```
