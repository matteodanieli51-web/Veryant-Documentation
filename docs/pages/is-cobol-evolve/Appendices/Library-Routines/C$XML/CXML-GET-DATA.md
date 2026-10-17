### CXML-GET-DATA

The CXML-GET-DATA function retrieves name and value of a given element.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-DATA
                    handle
                    itemName
                    itemValue
                   [valueLength]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-DATA* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *itemName* | PIC X(n) | Receives the name of the element. |
| *itemValue* | PIC X(n) | Receives the value of the element. This value is trimmed.<br>Comments, if any, are discarded. |
| *valueLength* | PIC 9(n) | Optional. Receives the length in bytes of the value after the trim. |

#### Return code:

This operation has no return value.
