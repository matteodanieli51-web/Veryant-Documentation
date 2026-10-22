### CXML-GET-VERSION

The CXML-GET-VERSION function returns the version of the XML document.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-VERSION
                    handle
                    version
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-VERSION* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |
| *version* | PIC X(n) | Receives the XML version. |
