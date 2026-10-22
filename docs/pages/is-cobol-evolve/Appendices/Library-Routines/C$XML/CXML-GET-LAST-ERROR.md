### CXML-GET-LAST-ERROR

The CXML-GET-LAST-ERROR function returns the last error.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-LAST-ERROR
                    errorText
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-LAST-ERROR* | Constant |  |
| *errorText* | PIC X(n) | Receives a textual description of the error. |

#### Return code:

This operation has no return value.
