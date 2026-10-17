### CXML-GET-STANDALONE

The CXML-GET-STANDALONE function returns the standalone pseudo-attribute of the XML document.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-STANDALONE
                    handle
                    standalone
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-STANDALONE* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |
| *standalone* | PIC X(n) | Receives the standalone pseudo-attribute value.<br>Possible values are "yes" or "no". |
