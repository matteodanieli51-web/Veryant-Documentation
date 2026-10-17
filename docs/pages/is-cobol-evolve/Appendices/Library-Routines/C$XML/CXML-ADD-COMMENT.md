### CXML-ADD-COMMENT

The CXML-ADD-COMMENT function adds a comment into the XML.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-ADD-COMMENT
                    handle
                    data
                   [length]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-ADD-COMMENT* | Constant |  |
| *handle* | USAGE HANDLE | A XML element or parser handle. |
| *data* | PIC X(n) | Specifies the comment text. |
| *length* | PIC 9(n) | Specifies the length of the comment text. If omitted, it defaults to the length of *data.* |
