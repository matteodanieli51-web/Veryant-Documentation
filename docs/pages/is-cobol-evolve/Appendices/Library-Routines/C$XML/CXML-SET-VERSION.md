### CXML-SET-VERSION

The CXML-SET-VERSION function changes the version of the XML document.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-SET-VERSION
                    handle
                    version
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-SET-VERSION* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |
| *version* | PIC X(n) | Specifies the new XML version. |
