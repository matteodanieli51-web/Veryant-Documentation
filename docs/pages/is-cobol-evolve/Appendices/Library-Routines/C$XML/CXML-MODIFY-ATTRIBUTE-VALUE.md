### CXML-MODIFY-ATTRIBUTE-VALUE

The CXML-MODIFY-ATTRIBUTE-VALUE function modifies and attribute value.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-MODIFY-ATTRIBUTE-VALUE
                    handle
                    attrNum
                    attrValue
                   [attrLength]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-MODIFY-ATTRIBUTE-VALUE* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *attrNum* | PIC 9(n) | Specifies the ordinal number of the attribute to modify. |
| *attrValue* | PIC X(n) | Specifies the new value of the attribute. |
| *attrLength* | PIC 9(n) | Specifies the length of the new attribute value. If omitted, it defaults to the length of *attrValue*. |
