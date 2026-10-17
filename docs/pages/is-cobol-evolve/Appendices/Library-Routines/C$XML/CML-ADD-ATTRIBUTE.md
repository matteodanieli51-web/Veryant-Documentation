### CML-ADD-ATTRIBUTE

The CXML-ADD-ATTRIBUTE function adds an attribute to the given element.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-ADD-ATTRIBUTE
                    handle
                    attrName
                   [attrValue]
                   [valueLength]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-ADD-ATTRIBUTE* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *attrName* | PIC X(n) | Specifies the name of the attribute that you’re going to add. |
| *attrValue* | PIC X(n) | Specifies the value of the attribute. If omitted, blank is used. |
| *valueLength* | PIC 9(n) | Specifies the length of the attribute value. If omitted, it defaults to the length of *attrValue.* |
