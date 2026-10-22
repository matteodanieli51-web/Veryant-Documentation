## IWC$SEND

The IWC$SEND library routine sends a message to the embedding HTML page in WebClient environment. The message text should be in the format that the HTML page expects. For more information about embedding a WebClient application within an HTML page, see [Embedding the COBOL application in an HTML page](../../../is-cobol-web-client/Embedding-the-COBOL-application-in-an-HTML-page/Embedding-the-COBOL-application-in-an-HTML-page).

### Syntax:

```cobol
 CALL "IWC$SEND" USING iwcStructure
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *iwcStructure* | Group item | Includes the message information. It must have the following structure:<br>01 iwcStructure.<br>03 iwcAction pic x(n).<br>03 iwcData pic x(n).<br>03 iwcBytes pic x(n).<br>*iwcAction*<br>Action required to the HTML page, i.e. "change-page-title".<br>Human-readable data, i.e. "This is the new title".<br>*iwcBytes*<br>Binary data.<br>The *iwcStructure* items can be defined as X ANY LENGTH.<br>There’s no need to fill all of them, it depends by what the HTML page expects. |

### Return code:

*returnCode* can be any signed numeric data item.

|  |  |
| --- | --- |
| -1 | Operation failed.<br>Ensure you’re running in WebClient environment and you previously successfully called the [IWC$INIT](./IWC$INIT) routine |
| 0 | Operation successful. |

### Examples:

**Example -** send a message to the HTML page

```cobol
       working-storage section.
       ...
       77  data-to-send               pic x any length.

       01  iwc-struct.
           03 iwc-action              pic x any length.
           03 iwc-data                pic x any length.
           03 iwc-bytes               pic x any length.
       ...
       procedure division.
       ...
           initialize iwc-struct.
           move "ComSample"  to iwc-action
           move data-to-send to iwc-data
           call "IWC$SEND" using iwc-struct.
```
