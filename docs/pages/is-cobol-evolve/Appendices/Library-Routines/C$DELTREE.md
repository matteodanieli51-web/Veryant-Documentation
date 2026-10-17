## C$DELTREE

The C$DELTREE library routine allows the user to delete a directory and its subdirectories even if there are files in them.

### Syntax:

```cobol
 CALL "C$DELTREE" USING directoryName
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *directoryName* | PIC X(n) | Specifies the name of the directory to be deleted. Both full and relative paths are allowed. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. Directory has been deleted. |
| 1 | Operation failed. Directory has not been fully deleted. |

### Examples:

**Example -** Delete a logs directory, including its subfolders and files

```cobol
*> define retCode as pic 9(n)

call "c$deltree" using "/myapp/logs"
                 giving retCode
if retCode = 0
   display message "Directory fully deleted"
else
   display message "Directory was not fully deleted"
end-if.
```
