## CBL_TOUPPER

The CBL_TOUPPER library routine converts a string of letters to upper case.

### Syntax:

```cobol
 CALL "CBL_TOUPPER" USING textString
                 BY VALUE length
                   GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *textString* | PIC X(n) | Specifies the string to convert. |
| *length* | PIC X(4) COMP-5 | Specifies the number of bytes of string to change; positions beyond this are unchanged. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Operation failed. |

### Examples:

**Example -** Convert the content of wrk-string to upper case

```cobol
       working-storage section.
       77 wrk-string pic x(12).
       77 wrk-len    pic x(4) comp-5.

       procedure division.
       main.
           move "Test String" to wrk-string.
           move 12 to wrk-len.
           call "CBL_TOUPPER" using wrk-string, wrk-len.
```
