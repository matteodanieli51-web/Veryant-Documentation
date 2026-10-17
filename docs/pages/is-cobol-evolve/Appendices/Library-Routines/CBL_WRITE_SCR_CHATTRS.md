## CBL_WRITE_SCR_CHATTRS

The CBL_WRITE_SCR_CHATTRS library routine writes a string of characters and their attributes to the screen.

This routine is implemented for compatibility with other COBOLs in order to facilitate migrations. Using this routine in new programs is not suggested; you should use DISPLAY and ACCEPT verbs instead.

### Syntax:

```cobol
 CALL "CBL_WRITE_SCR_CHATTRS" USING screenPosition
                                    characterBuffer
                                    attributeBuffer
                                    stringLength
                             GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *screenPosition* | Group Item | Group item defined as follows:<br>It specifies the screen position at which to start writing. The top left corner is row 0, column 0. |
| *characterBuffer* | PIC X(n) | Specifies the characters to write to the screen. |
| *attributeBuffer* | PIC X(n) | Specifies the character attributes. |
| *stringLength* | PIC XX COMP-X | On entry, contains the length of the string to write. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation failed. |
