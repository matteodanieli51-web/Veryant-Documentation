## CBL_READ_SCR_CHARS

The CBL_READ_SCR_CHARS library routine reads a string of characters from the screen.

This routine is implemented for compatibility with other COBOLs in order to facilitate migrations. Using this routine in new programs is not suggested; you should use DISPLAY and ACCEPT verbs instead.

### Syntax:

```cobol
 CALL "CBL_READ_SCR_CHARS" USING screenPosition
                                 characterBuffer
                                 stringLength
                          GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *screenPosition* | Group Item | Group item is defined as follows:<br>It specifies the screen position at which to start reading. The top left corner is row 0, column 0. |
| *characterBuffer* | PIC X(n) | Returns the characters read from the screen. It must be at least the length specified by *stringLength*. Positions in it beyond that length are unchanged. |
| *stringLength* | PIC XX COMP-X | On entry, contains the length of the string to read.<br>On exit, contains the length of the string read when the end of the screen is reached |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation failed. |
