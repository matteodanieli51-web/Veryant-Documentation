## IWC$STOP

The IWC$STOP library routine terminates the communication between an embedded WebClient application and the embedding HTML page. For more information about embedding a WebClient application within an HTML page, see [Embedding the COBOL application in an HTML page](../../../is-cobol-web-client/Embedding-the-COBOL-application-in-an-HTML-page/Embedding-the-COBOL-application-in-an-HTML-page).

### Syntax:

```cobol
 CALL "IWC$STOP" GIVING returnCode
```

### Return code:

*returnCode* can be any signed numeric data item.

|  |  |
| --- | --- |
| -1 | Operation failed.<br>Ensure you’re running in WebClient environment and you previously successfully called the [IWC$INIT](./IWC$INIT) routine |
| 0 | Operation successful. |

### Examples:

**Example -** terminate the HTML-COBOL communication

```cobol
procedure division.
...
   call "iwc$stop".
```
