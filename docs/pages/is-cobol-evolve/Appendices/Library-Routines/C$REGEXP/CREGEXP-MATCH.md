### CREGEXP-MATCH

The CREGEXP-MATCH function applies a regular expression to a string, and returns a handle.

#### Syntax

```cobol
 CALL "C$REGEXP" USING CREGEXP-MATCH
                       regExprHandle
                       string
                       length
                       matchStart
                       matchEnd
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CREGEXP-MATCH | Constant |  |
| *regExprHandle* | USAGE HANDLE | The handle returned by [CREGEXP-COMPILE](./CREGEXP-COMPILE) |
| *string* | PIC X(n) | The text to test for a match |
| *length* | PIC 9(n) | The number of characters to be processed. If zero, the whole string is processed. |
| *matchStart* | PIC 9(n) | As an input parameter, indicates where the matching should begin. As an output parameter, it returns the index of the start of the pattern that matched. It must be initialized before the first match is attempted. |
| *matchEnd* | PIC 9(n) | Returns one byte beyond the pattern that matched. To test the string for additional matches, call this function again after setting *matchStart* to *matchEnd*. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | No match found or an error occurred.<br>Call the [CREGEXP-LAST-ERROR](./CREGEXP-LAST-ERROR) function for more details. |
| >0 | Handle to the match. |
