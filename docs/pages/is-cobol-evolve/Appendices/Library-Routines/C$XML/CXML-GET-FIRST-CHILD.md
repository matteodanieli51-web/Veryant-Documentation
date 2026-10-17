### CXML-GET-FIRST-CHILD

The CXML-GET-FIRST-CHILD function retrieves the handle of the first child element of the handle passed.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-FIRST-CHILD
                    handle
             GIVING childHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-FIRST-CHILD* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |

#### Return code:

*childHandle* must be a USAGE HANDLE data item. It receives the handle of the first child element, or zero if there are no children. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
