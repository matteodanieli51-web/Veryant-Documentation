## CBL_COPY_FILE

The CBL_COPY_FILE library routine copies a file.

The source file and the destination file are locked during the copy process. This guarantees the best performance and file integrity.

**Note -** This routine is supported for compatibility. In order to take advantage of every copy feature provided by isCOBOL, refer to [C$COPY](./C$COPY).

### Syntax:

```cobol
 CALL "CBL_COPY_FILE" USING sourceFile
                            destFile
                           [flagPreserve]
                     GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *sourceFile* | PIC X(n) | Specifies the filename to be copied.<br>The name can be partially or entirely changed through configuration properties if [iscobol.file.env_naming (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to true.<br>If the name is a relative path and [iscobol.file.prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set, then the first FILE-PREFIX path is used to locate the file. The ISF protocol is not supported, it will invalidate the file path, if used. |
| *destFile* | PIC X(n) | Specifies the destination filename.<br>The name can be partially or entirely changed through configuration properties if [iscobol.file.env_naming (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to true.<br>If the name is a relative path and [iscobol.file.prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set, then the first FILE-PREFIX path is used to locate the file. The ISF protocol is not supported, it will invalidate the file path, if used. |
| *flagPreserve* | PIC 9 | Optional parameter. If set to "1" applies the source file last modification date and time to the destination file. If set to "0" or omitted, the destination file is created with the current date and time. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 14605 | Not found. |
| 14613 | Is directory. |
| 14629 | Couldn’t lock. |

### Examples:

**Example -** Copy a report from main reports folder to users folder

```cobol
*> Define src-file and dest-file as pic x(n)
move "c:\app1\reports\repcustomers.lst" to src-file
move "c:\users\adam\reports\repcustomers.lst" to dest-file
call "cbl_copy_file" using src-file dest-file
if return-code not = 0
   display message "Copy failed"
end-if
```
