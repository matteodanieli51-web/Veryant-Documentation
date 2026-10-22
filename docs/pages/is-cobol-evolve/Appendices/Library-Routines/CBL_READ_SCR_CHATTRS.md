## CBL_READ_SCR_CHATTRS

The CBL_READ_SCR_CHATTRS library routine reads a string of characters and their corresponding attributes from the screen.

This routine is implemented for compatibility with other COBOLs in order to facilitate migrations. Using this routine in new programs is not suggested; you should use DISPLAY and ACCEPT verbs instead.

### Syntax:

```cobol
 CALL "CBL_READ_SCR_CHATTRS" USING screenPosition
                                   characterBuffer
                                   attributeBuffer
                                   stringLength
                            GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *screenPosition* | Group Item | Group item is defined as follows:<br>03  columnNumber   PIC X COMP-X.<br>It specifies the screen position at which to start reading. The top left corner is row 0, column 0. |
| *characterBuffer* | PIC X(n) | Returns the characters read from the screen. It must be at least the length specified by *stringLength*. Positions in it beyond that length are unchanged. |
| *attributeBuffer* | PIC X(n) | On exit, this data item contains the attributes read from the screen. It must be at least the length specified by *stringLength*. Positions in the data item beyond that length are unchanged. |
| *stringLength* | PIC XX COMP-X | On entry, contains the length of the string to read.<br>On exit, contains the length of the string read when the end of the screen is reached |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation failed. |
