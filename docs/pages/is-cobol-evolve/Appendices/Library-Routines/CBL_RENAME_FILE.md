## CBL_RENAME_FILE

The CBL_RENAME_FILE library routine renames a file.

This routine is not supported by DBMaker DCI and DatabaseBridge.

**Note -** This routine is supported for compatibility. In order to take advantage of every rename feature provided by isCOBOL, refer to [RENAME](./RENAME).

### Syntax:

```cobol
 CALL "CBL_RENAME_FILE" USING oldName
                              newName
                       GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *oldName* | PIC X(n) | Specifies the name of the file that you want to rename. If no path is given, then the current directory is assumed.<br>The name can be partially or entirely changed through configuration properties if [iscobol.file.env_naming (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to true.<br>If the name is a relative path and [iscobol.file.prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set, then the first FILE-PREFIX path is used to locate the file. The ISF protocol is not supported, it will invalidate the file path, if used. |
| *newName* | PIC X(n) | Specifies the new name for the file. If no path is given, then the current directory is assumed.<br>The name can be partially or entirely changed through configuration properties if [iscobol.file.env_naming (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to true.<br>If the name is a relative path and [iscobol.file.prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set, then the first FILE-PREFIX path is used to locate the file. The ISF protocol is not supported, it will invalidate the file path, if used. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 14605 | The file is not found. |
| 14613 | The value passed is a directory, not a file. |

### Examples:

**Example -** Rename file to append the date it was generated

```cobol
*> define curr-date as pic x(6)
*> new-name and old-name as pic x(n)
accept curr-date from date
initialize new-name
string "c:\app1\reps\cust-report-"
       curr-date
       ".lst"
  into new-name
end-string
move "c:\app1\reps\cust-report.lst" to old-name
call "cbl_rename_file" using old-name new-name
if return-code not = 0
   display message "Rename operation failed"
end-if
```
