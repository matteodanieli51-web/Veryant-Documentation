### CXML-RELEASE-PARSER

The CXML-RELEASE-PARSER releases memory allocated by parsing.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-RELEASE-PARSER
                    xmlHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-RELEASE-PARSER* | Constant |  |
| *xmlHandle* | USAGE HANDLE | Specifies the handle of a XML tree returned by CXML-PARSE-FILE. |

#### Return code:

This operation has no return value.
