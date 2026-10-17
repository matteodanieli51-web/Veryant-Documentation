## C$MAKEDIR

The C$MAKEDIR library routine creates a new directory. If the directory already exists, the routine fails.

### Syntax:

```cobol
 CALL "C$MAKEDIR" USING directoryName
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *directoryName* | PIC X(n) | Specifies the name of the directory to be created. Both full and relative paths are allowed. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. Directory has been created. |
| 1 | Operation failed. Directory has not been created. |

### Examples:

**Example -** Create a new temporary sub-folder

```cobol
call "c$makedir" using "c:\tmp\newtemp" giving retCode
if retCode = 0
   display message "Directory successfully created"
else
   display message "Wrong path"
end-if.
```
