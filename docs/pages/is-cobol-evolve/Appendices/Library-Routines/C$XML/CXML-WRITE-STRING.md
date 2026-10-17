### CXML-WRITE-STRING

The CXML-WRITE-STRING function copies the content of a XML document to an alphanumeric data item.

The indentation of elements in the generated XML is controlled by the configuration property [iscobol.cxml.indent_number](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-WRITE-STRING
                    handle
                    dataArea
             GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-WRITE-STRING* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |
| *dataArea* | PIC X(n) | Receives the XML content. |

#### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| >0 | Data truncated. *dataArea* wasn’t large enough. The value of *returnCode* is the number of bytes discarded. |
| <0 | Operation failed. |
