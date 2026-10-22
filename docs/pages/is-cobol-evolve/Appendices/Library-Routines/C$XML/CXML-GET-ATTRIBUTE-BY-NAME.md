### CXML-GET-ATTRIBUTE-BY-NAME

The CXML-GET-ATTRIBUTE-BY-NAME function returns the content of the named attribute.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-ATTRIBUTE-BY-NAME
                    handle
                    attrName
                    attrFlags
                    attrIdx
                    attrActualName
                    attrValue
                    attrLen
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-ATTRIBUTE-BY-NAME* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *attrName* | PIC X(n) | Specifies the name of the attribute to search. |
| *attrFlags* | PIC 9(n) | Specifies if the search should consider case. Valid values are:<br>**0 -** case sensitive search<br>**1 -** case insensitive search |
| *attrIdx* | PIC 9(n) | On entry, it specifies the starting index of attributes to search; use zero to start at the first attribute.<br>On exit, it returns the index of the attribute found. |
| *attrActualName* | PIC X(n) | Returns the name of the attribute found. |
| *attrValue* | PIC X(n) | Returns the value of the attribute found. |
| *attrLen* | PIC 9(n) | Returns the lenght of the attribute value. |
