## CBL_CREATE_DIR

The CBL_CREATE_DIR library routine creates a new directory. If the directory already exists, the routine fails.

### Syntax:

```cobol
 CALL "CBL_CREATE_DIR" USING directoryName
                      GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *directoryName* | PIC X(n) | Specifies the name of the directory to be created. Both full and relative paths are allowed. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 14596 | Invalid directory. |
| 14628 | Directory already exists. |
| 14629 | No permission. |

### Examples:

**Example -** Create user's report directory

```cobol
*> define dir-name as pic x(n)
move "c:\users\adam\reports" to dir-name
call "cbl_create_dir" using dir-name
if return-code not = 0
   display message "Directory creation failed"
end-if
```
