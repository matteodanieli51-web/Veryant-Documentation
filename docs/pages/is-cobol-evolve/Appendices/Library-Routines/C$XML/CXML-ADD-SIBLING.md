### CXML-ADD-SIBLING

The CXML-ADD-SIBLING function adds a sibling item to the given element.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-ADD-SIBLING
                    handle
                    elemName
                   [elemData]
                   [dataLength]
             GIVING siblingHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-ADD-SIBLING* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *elemName* | PIC X(n) | Specifies the name of the sibling element that you’re going to add. |
| *elemData* | PIC X(n) | Specifies the value of the new  element. If omitted, blank is used. |
| *attrLength* | PIC 9(n) | Specifies the length of the element value. If omitted, it defaults to the length of *elemData*. |

#### Return code:

*siblingHandle* must be a USAGE HANDLE data item. It receives the handle of the new element. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
