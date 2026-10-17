## CBL_DELETE_DIR

The CBL_DELETE_DIR library routine removes an empty directory.

### Syntax:

```cobol
 CALL "CBL_DELETE_DIR" USING directoryName
                      GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *directoryName* | PIC X(n) | Specifies the name of the directory to be removed. Both full and relative paths are allowed. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 14605 | Not found. |
| 14629 | No permission. |

### Examples:

**Example -** Delete temporary sorts directory

```cobol
*> define dir-name as pic x(n)
move "c:\tmp\sorts1" to dir-name
call "cbl_delete_dir" using dir-name
if return-code not = 0
   display message "Directory deletion failed"
end-if
```
