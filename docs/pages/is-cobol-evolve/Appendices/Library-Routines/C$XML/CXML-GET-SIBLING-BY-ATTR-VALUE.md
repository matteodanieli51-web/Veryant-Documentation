### CXML-GET-SIBLING-BY-ATTR-VALUE

The CXML-GET-SIBLING-BY-ATTR-VALUE function returns the handle of the sibling element that includes an attribute with a given value.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-SIBLING-BY-ATTR-VALUE
                    handle
                    attrValue
                    attrFlags
             GIVING siblingHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-SIBLING-BY-ATTR-VALUE* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *attrValue* | PIC X(n) | Specifies the attribute value to search. |
| *siblingFlags* | PIC 9(n) | Specifies if the search should consider case. Valid values are:<br>**0 -** case sensitive search<br>**1 -** case insensitive search |

#### Return code:

*siblingHandle* must be a USAGE HANDLE data item. It receives the handle of the found sibling element or 0 if such element wasn’t found. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
