## CBL_WRITE_SCR_N_CHAR

The CBL_WRITE_SCR_N_CHAR library routine writes a specified character to a string of positions on the screen.

This routine is implemented for compatibility with other COBOLs in order to facilitate migrations. Using this routine in new programs is not suggested; you should use DISPLAY and ACCEPT verbs instead.

### Syntax:

```cobol
 CALL "CBL_WRITE_SCR_N_CHAR" USING screenPosition
                                   character
                                   stringLength
                            GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *screenPosition* | Group Item | Group item defined as follows:<br>It specifies the screen position at which to start writing. The top left corner is row 0, column 0. |
| *character* | PIC X COMP-X | Specifies the character to write to the screen. |
| *stringLength* | PIC XX COMP-X | On entry, contains the length of the character string. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation failed. |
