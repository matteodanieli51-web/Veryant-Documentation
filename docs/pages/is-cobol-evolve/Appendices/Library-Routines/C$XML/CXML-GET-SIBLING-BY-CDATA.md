### CXML-GET-SIBLING-BY-CDATA

The CXML-GET-SIBLING-BY-CDATA function returns the handle of the sibling element that includes the specified CDATA.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-SIBLING-BY-CDATA
                    handle
                    cData
                    cDataFlags
             GIVING siblingHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-SIBLING-BY-CDATA* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *cData* | PIC X(n) | Specifies the CDATA to search. |
| *cDataFlags* | PIC 9(n) | Specifies if the search should consider case. Valid values are:<br>**0 -** case sensitive search<br>**1 -** case insensitive search |

#### Return code:

*siblingHandle* must be a USAGE HANDLE data item. It receives the handle of the found sibling element or 0 if such element wasn’t found. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
