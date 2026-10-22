### WD2-GET-SESSION-VALUE

The WD2-GET-SESSION-VALUE function retrieves the value of a session field.

The function can be used also to retrieve screen dimensions since at the display of the initial window the following session values are set by WebDirect:

- iscobol.wd2.on_client_info.desktop.width
- iscobol.wd2.on_client_info.desktop.height
- iscobol.wd2.on_client_info.screen.width
- iscobol.wd2.on_client_info.screen.height

Dimensions are expressed in pixel.

**Note -** Screen dimensions are available after the display of the first window. They could be not available soon after the display as they depend by an event that the ZK Framework generates in response to the creation of a window. It's good practice to wait few seconds before inquiring screen dimensions.

The function can be used also to retrieve information about the HTTP session and the servlet context behind the WebDirect application. The following session values are set by WebDirect:

- iscobol.wd2.servletcontext.name
- iscobol.wd2.servletcontext.realpath
- iscobol.wd2.servletcontext.path
- iscobol.wd2.servletcontext.serverinfo
- iscobol.wd2.servletcontext.majorversion
- iscobol.wd2.servletcontext.minorversion
- iscobol.wd2.httpsession.id
- iscobol.wd2.httpsession.creationtime

#### Syntax:

```cobol
 CALL "WD2$SESSION" USING WD2-GET-SESSION-VALUE
                          fieldName
                          fieldValue
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Constant |  |
| *fieldName* | PIC X(n) | Specifies the name of the session field whose value must be retrieved. |
| *fieldValue* | PIC X(n) | Receives the field value. |

#### Return code:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Running outside WebDirect environment. |
| -2 | Invalid parameters. |
| -3 | Invalid opCode. |
| -4 | Internal error. |
| -5 | Internal error. |
| -6 | Field not found. |
