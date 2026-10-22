### CXML-GET-NEXT-SIBLING

The CXML-GET-NEXT-SIBLING function retrieves the handle of the next sibling element of the handle passed.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-NEXT-SIBLING
                    handle
             GIVING siblingHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-NEXT-SIBLING* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |

#### Return code:

*siblingHandle* must be a USAGE HANDLE data item. It receives the handle of the next sibling element, or zero if there are no sibling items. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
