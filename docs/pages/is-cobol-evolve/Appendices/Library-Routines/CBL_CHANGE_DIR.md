## CBL_CHANGE_DIR

The CBL_CHANGE_DIR library routine changes the current directory for the COBOL program.

This routine changes the working directory only for files opened by the COBOL program.

### Syntax:

```cobol
 CALL "CBL_CHANGE_DIR" USING pathName
                      GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *pathName* | PIC X(n) | Specifies the new current directory. Must be terminated by space or low-value. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 14605 | Not found. |

### Examples:

**Example -** Change current directory to a temporary reports one

```cobol
*> define new-dir as pic x(n)
move "c:\tmp\reports" to new-dir
call "cbl_change_dir" using new-dir
if return-code = 0
   display message "Current Directory changed to " new-dir
else
   display message "Error : " return-code
end-if
```
