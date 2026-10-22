### CXML-GET-CHILD-BY-NAME

The CXML-GET-CHILD-BY-NAME function returns the named child element directly, avoiding you to parse elements one by one.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-CHILD-BY-NAME
                    handle
                    childName
                    childFlags
             GIVING childHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-CHILD-BY-NAME* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *childName* | PIC X(n) | Specifies the name of the child element to search. |
| *childFlags* | PIC 9(n) | Specifies if the search should consider case. Valid values are:<br>**0 -** case sensitive search<br>**1 -** case insensitive search |

#### Return code:

*childHandle* must be a USAGE HANDLE data item. It receives the handle of the found child element or 0 if no child was found. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
