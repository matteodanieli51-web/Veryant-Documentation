### CXML-SET-DATA

The CXML-SET-DATA function modifies the CDATA of an element.

CXML-SET-DATA is the new name of a renamed function. The old name CXML-MODIFY-CDATA can still be used, though.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-SET-DATA
                    handle
                    data
                   [length]
                   [startPos]
                   [endPos]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-SET-DATA* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |
| *data* | PIC X(n) | Specifies the new CDATA. |
| *length* | PIC 9(n) | Specifies the number of bytes in *data* to consider. If omitted, the whole *data* content is used. |
| *startPos* | PIC 9(n) | Specifies the starting position of the data to modify. If omitted, it defaults to the start of the data. |
| *endPos* | PIC 9(n) | Specifies the ending position of the data to modify. If omitted, it defaults to the end of the data. |
