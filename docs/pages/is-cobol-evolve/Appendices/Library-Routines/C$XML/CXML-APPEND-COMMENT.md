### CXML-APPEND-COMMENT

The CXML-APPEND-COMMENT function appends a comment to a given element or document.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-APPEND-COMMENT
                    handle
                    data
                   [length]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-APPEND-COMMENT* | Constant |  |
| *handle* | USAGE HANDLE | A XML element or parser handle. |
| *data* | PIC X(n) | Specifies the comment text. |
| *length* | PIC 9(n) | Specifies the length of the comment text. If omitted, it defaults to the length of *data.* |
