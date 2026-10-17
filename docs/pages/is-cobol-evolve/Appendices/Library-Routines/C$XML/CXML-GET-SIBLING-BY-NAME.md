### CXML-GET-SIBLING-BY-NAME

The CXML-GET-SIBLING-BY-NAME function returns the named sibling element directly, avoiding you to parse elements one by one.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-SIBLING-BY-NAME
                    handle
                    childName
                    childFlags
             GIVING siblingHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-SIBLING-BY-NAME* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *siblingName* | PIC X(n) | Specifies the name of the sibling element to search. |
| *siblingFlags* | PIC 9(n) | Specifies if the search should consider case. Valid values are:<br>**0 -** case sensitive search<br>**1 -** case insensitive search |

#### Return code:

*siblingHandle* must be a USAGE HANDLE data item. It receives the handle of the found sibling element or 0 if such element wasn’t found. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
