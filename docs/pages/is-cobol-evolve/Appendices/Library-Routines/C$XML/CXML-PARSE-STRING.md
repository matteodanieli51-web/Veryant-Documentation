### CXML-PARSE-STRING

The CXML-PARSE-STRING function parses the specified string as XML, returning a parser handle.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-PARSE-STRING
                    string
             GIVING xmlHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-PARSE-STRING* | Constant |  |
| *string* | PIC X(n) | Specifies the string to parse. |

#### Return code:

*xmlHandle* must be a USAGE HANDLE data item. It receives the handle of the XML tree and will be used by other C$XML op-codes.
