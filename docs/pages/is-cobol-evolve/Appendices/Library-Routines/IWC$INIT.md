## IWC$INIT

The IWC$INIT library routine initiates the communication between an embedded WebClient application and the embedding HTML page. For more information about embedding a WebClient application within an HTML page, see [Embedding the COBOL application in an HTML page](../../../is-cobol-web-client/Embedding-the-COBOL-application-in-an-HTML-page/Embedding-the-COBOL-application-in-an-HTML-page).

By calling this library routine you also specify the CRT-STATUS value for the interruption of the ACCEPT statement when the COBOL program receives a message from the embedding HTML page.

### Syntax:

```cobol
 CALL "IWC$INIT" USING crtStatus
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *crtStatus* | PIC 9(n) or numeric literal | Specifies the CRT-STATUS value for the interruption of the ACCEPT statement when the COBOL program receives a message from the embedding HTML page |

### Return code:

*returnCode* can be any signed numeric data item.

|  |  |
| --- | --- |
| -1 | Operation failed.<br>Ensure you’re running in WebClient environment |
| 0 | Operation successful. |

### Examples:

**Example -** initiate the HTML-COBOL communication setting the value 100 as CRT-STATUS value to be returned when the COBOL program receives a message from the HTML page

```cobol
procedure division.
...
   call "iwc$init" using 100.
```
