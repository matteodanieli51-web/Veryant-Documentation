## CBL_GET_SCR_SIZE

The CBL_GET_SCR_SIZE library routine returns the screen size.

### Syntax:

```cobol
 CALL "CBL_GET_SCR_SIZE" USING screenDepth
                               screenWidth
                        GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *screenDepth* | PIC X COMP-X | Returns the number of lines in the screen. |
| *screenWidth* | PIC X COMP-X | Returns the number of columns in the screen. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |

### Examples:

**Example -** Get the screen size

```cobol
call "cbl_get_scr_size" using depth, width.
```
