### CXML-SET-STANDALONE

The CXML-SET-STANDALONE function changes the standalone pseudo-attribute of the XML document.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-SET-STANDALONE
                    handle
                    standalone
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-SET-STANDALONE* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |
| *standalone* | PIC X(n) | Specifies the new standalone pseudo-attribute value.<br>Valid values are "yes" or "no". |
