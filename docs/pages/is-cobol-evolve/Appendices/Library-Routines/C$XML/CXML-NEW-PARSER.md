### CXML-NEW-PARSER

The CXML-NEW-PARSER function creates a new XML document.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-NEW-PARSER
             GIVING xmlHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-NEW-PARSER* | Constant |  |

#### Return code:

*xmlHandle* must be a USAGE HANDLE data item. It receives the handle of the XML document.
