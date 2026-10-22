### CXML-OPEN-FILE

The CXML-OPEN-FILE function opens a named XML file without parsing it. Once the file is open, you can read individual records by calling [CXML-PARSE-NEXT-RECORD](./CXML-PARSE-NEXT-RECORD).

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-OPEN-FILE
                    fileName
             GIVING xmlHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-OPEN-FILE* | Constant |  |
| *fileName* | PIC X(n) | Specifies the name of the file to open. |

#### Return code:

*xmlHandle* must be a USAGE HANDLE data item. It receives the handle of the XML file.
