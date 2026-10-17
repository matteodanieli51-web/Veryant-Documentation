### CXML-SET-ENCODING

The CXML-SET-ENCODING function changes the encding of the XML document. Note that this operation affects only the document header, the actual encoding used inside the document depends by how the program writes data.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-SET-ENCODING
                    handle
                    encoding
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-SET-ENCODING* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |
| *encoding* | PIC X(n) | Specifies the new XML encoding.<br>All the canonical names listed in the following Java documentation can be used: [http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html)<br>If a invalid encoding or no encoding are specified, then UTF-8 is assumed. |
