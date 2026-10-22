## CBL_DELETE_FILE

The CBL_DELETE_FILE library routine deletes a file.

**Note -** This routine is supported for compatibility. In order to take advantage of every delete feature provided by isCOBOL, refer to [C$DELETE](./C$DELETE).

### Syntax:

```cobol
 CALL "CBL_DELETE_FILE" USING fileName
                       GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the name of the file to be deleted.<br>The name can be partially or entirely changed through configuration properties if [iscobol.file.env_naming (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to true.<br>If the name is a relative path and [iscobol.file.prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set, then the first FILE-PREFIX path is used to locate the file. The ISF protocol is not supported, it will invalidate the file path, if used. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 14605 | Not found. |
| 14613 | Is directory. |
| 14629 | No permission. |

### Examples:

**Example -** Delete temporary sort file

```cobol
*> define file-name as pic x(n)
move "c:\tmp\sorts1\sortcust" to file-name
call "cbl_delete_file" using file-name
if return-code not = 0
   display message "File deletion failed"
end-if
```
