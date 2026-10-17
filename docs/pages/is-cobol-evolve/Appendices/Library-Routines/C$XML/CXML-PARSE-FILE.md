### CXML-PARSE-FILE

The CXML-PARSE-FILE function parses a XML file, returning a handle to the entire XML tree as the return-code.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-PARSE-FILE
                    fileName
             GIVING xmlHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-PARSE-FILE* | Constant |  |
| *fileName* | PIC X(n) | Specifies the name of the file to open. |

#### Return code:

*xmlHandle* must be a USAGE HANDLE data item. It receives the handle of the XML tree and will be used by other C$XML op-codes.
