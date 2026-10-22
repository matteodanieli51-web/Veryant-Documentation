### CXML-GET-ENCODING

The CXML-GET-ENCODING function returns the encoding of the XML document.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-ENCODING
                    handle
                    encoding
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-ENCODING* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |
| *encoding* | PIC X(n) | Receives the XML encoding. |
