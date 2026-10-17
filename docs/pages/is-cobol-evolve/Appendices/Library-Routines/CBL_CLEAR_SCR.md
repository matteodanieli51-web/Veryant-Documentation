## CBL_CLEAR_SCR

The CBL_CLEAR_SCR library routine clears the entire screen using a specified character and attribute.

This routine is implemented for compatibility with other COBOLs in order to facilitate migrations. Using this routine in new programs is not suggested; you should use DISPLAY and ACCEPT verbs instead.

### Syntax:

```cobol
 CALL "CBL_CLEAR_SCR" USING character
                            attribute
                     GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *character* | PIC X COMP-X | Specifies the character to write. |
| *attribute* | PIC X COMP-X | Specifies the attribute to write. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation failed. |
