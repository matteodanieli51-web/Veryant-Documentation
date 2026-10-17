### CXML-WRITE-FILE

The CXML-WRITE-FILE function writes the content of a XML document to file. After this operation, the CXML-RELEASE-PARSER op-code should be used to release the XML document from memory.

The indentation of elements in the generated XML is controlled by the configuration property [iscobol.cxml.indent_number](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-WRITE-FILE
                    handle
                    fileName
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-WRITE-FILE* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |
| *fileName* | PIC X(n) | Specifies the name of the file to write. |
