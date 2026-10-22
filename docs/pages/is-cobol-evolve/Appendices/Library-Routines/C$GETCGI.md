## C$GETCGI

The C$GETCGI routine retrieves CGI variables. This routine is implemented for compatibility with other COBOLs.

### Syntax:

```cobol
CALL "C$GETCGI"  USING variableName
                       destItem
                      [valueIndex]
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *variableName* | PIC X(n) or string literal | Name of the variable. |
| *destItem* | PIC X(n) | Value of the variable. |
| *valueIndex* | PIC 9(n) | Optional parameter. It contains an index that is used when a CGI variable has multiple values in the CGI input data. |

### Return Code:

*returnCode* is a signed numeric data item. It receives the size of the resulting value. This may be "0" to indicate that the variable exists but has no value, or "-1" to indicate that the variable does not exist
