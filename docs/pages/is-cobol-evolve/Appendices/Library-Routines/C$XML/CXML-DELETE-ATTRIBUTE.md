### CXML-DELETE-ATTRIBUTE

The CXML-DELETE-ATTRIBUTE function deletes an attribute from an element.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-DELETE-ATTRIBUTE
                    handle
                    attrNum
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-DELETE-ATTRIBUTE* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *attrNum* | PIC 9(n) | Specifies the ordinal number of the attribute to delete*.* |
