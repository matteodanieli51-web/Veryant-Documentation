### CXML-GET-PREV-SIBLING

The CXML-GET-PREV-SIBLING function  allows you to move backwards in an XML file.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-PREV-SIBLING
                    handle
             GIVING siblingHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-PREV-SIBLING* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |

#### Return code:

*siblingHandle* must be a USAGE HANDLE data item. It receives the handle of the previous sibling element. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
