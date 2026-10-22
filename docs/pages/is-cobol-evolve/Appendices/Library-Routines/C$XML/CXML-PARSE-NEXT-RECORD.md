### CXML-PARSE-NEXT-RECORD

The CXML-PARSE-NEXT-RECORD function allows you to parse individual records of a file instead of parsing the entire file all at once.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-PARSE-NEXT-RECORD
                    xmlHandle
             GIVING recordHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-PARSE-NEXT-RECORD* | Constant |  |
| *xmlHandle* | USAGE HANDLE | A parser handle returned by CXML-OPEN-FILE. |

#### Return code:

*recordHandle* must be a USAGE HANDLE data item. It receives the handle of record read. It’s good practice to free this handle with a DESTROY statement before reusing it in order to avoid memory leaks.
