### CXML-GET-COMMENT

The CXML-GET-COMMENT function returns the comments associated to a given element or document.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-COMMENT
                    handle
                    commentData
                   [commentLength]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-COMMENT* | Constant |  |
| *handle* | USAGE HANDLE | A XML element or parser handle. |
| *commentData* | PIC X(n) | It receives the comment text. If more comments are available, they’re returned as substrings separated by a x”00” digit. |
| *commentLength* | PIC 9(n) | It receives the length of the comment text. |
