### CXML-GET-PARENT

The CXML-GET-PARENT function retrieves the handle of the parent element of the handle passed.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-PARENT
                    handle
             GIVING parentHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-PARENT* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |

#### Return code:

*parentHandle* must be a USAGE HANDLE data item. It receives the handle of the parent element, or zero if you’re processing the root element. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
