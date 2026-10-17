## IWC$GET

The IWC$GET library routine receives a message from the embedding HTML page in WebClient environment. For more information about embedding a WebClient application within an HTML page, see [Embedding the COBOL application in an HTML page](../../../is-cobol-web-client/Embedding-the-COBOL-application-in-an-HTML-page/Embedding-the-COBOL-application-in-an-HTML-page).

### Syntax:

```cobol
 CALL "IWC$GET" USING iwcStructure
                      [timeout]
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *iwcStructure* | Group item | Receives the message information. It must have the following structure:<br>01 iwcStructure.<br>03 iwcAction pic x(n).<br>03 iwcData pic x(n).<br>03 iwcBytes pic x(n).<br>*iwcAction*<br>Action required by the HTML page, i.e. "close".<br>*iwcData*<br>Human-readable data.<br>*iwcBytes*<br>Binary data.<br>The *iwcStructure* items can be defined as X ANY LENGTH.<br>Some fields may be empty, depending on what the HTML page sends. |
| *timeout* | PIC 9(n) or numeric literal | Specifies the number of hundreds of seconds that the routine must wait for a message. If no message is received in the specified time frame, then the routine exits with a return-code value of 99.<br>If this parameter is omitted, then the routine waits until a message is received. |

### Return code:

*returnCode* can be any signed numeric data item.

|  |  |
| --- | --- |
| -1 | Operation failed.<br>Ensure you’re running in WebClient environment and you previously successfully called the [IWC$INIT](./IWC$INIT) routine |
| 0 | Operation successful, message received |
| 99 | Timeout, no message received |

### Examples:

**Example -** receive a message from the HTML page

```cobol
       working-storage section.
       ...
       01  iwc-struct.
           03 iwc-action              pic x any length.
           03 iwc-data                pic x any length.
           03 iwc-bytes               pic x any length.
       ...

       procedure division.
       ...
           initialize iwc-struct.
           call "IWC$GET" using iwc-struct.
```
