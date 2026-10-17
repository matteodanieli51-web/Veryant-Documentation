### CXML-GET-ATTRIBUTE

The CXML-GET-DATA function retrieves name and value of the attributes of an element.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-ATTRIBUTE
                    handle
                    attrNum
                    attrName
                    attrValue
                   [valueLength]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-ATTRIBUTE* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *attrNum* | PIC 9(n) | The attribute to get, starting at 1. |
| *itemName* | PIC X(n) | Receives the name of the attribute. |
| *attrValue* | PIC X(n) | Receives the value of the attribute. |
| *valueLength* | PIC 9(n) | Optional. Receives the lenght in bytes of the attribute value. |

#### Return code:

This operation has no return value.
