## CBL_CHECK_FILE_EXIST

The CBL_CHECK_FILE_EXIST library routine checks if a file exists. If the file exists, the routine returns information about the file.

### Syntax:

```cobol
 CALL "CBL_CHECK_FILE_EXIST" USING fileName
                                   fileDetails
                            GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the name of the file to check.<br>The name can be partially or entirely changed through configuration properties if [iscobol.file.env_naming (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to true.<br>If the name is a relative path and [iscobol.file.prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set, then the first FILE-PREFIX path is used to locate the file. The ISF protocol is not supported, it will invalidate the file path, if used. |
| *fileDetails* | Group Item | Receives the file information. It must have the following structure: |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 14605 | Not found. |
| 14613 | Is directory. |

### Examples:

**Example -** Check if file exist and return information about it

```cobol
working-storage section.
01 cbl-fileexist-buf.
   03 cblte-fe-filesize       pic x(8) comp-x.
   03 cblte-fe-date.
      05 cblte-fe-day         pic x comp-x.
      05 cblte-fe-month       pic x comp-x.
      05 cblte-fe-year        pic x(2) comp-x.
   03 cblte-fe-time.
      05 cblte-fe-hours       pic x comp-x.
      05 cblte-fe-minutes     pic x comp-x.
      05 cblte-fe-seconds     pic x comp-x.
      05 cblte-fe-hundredths  pic x comp-x.
...
procedure division.
...
check-file-exist.
   call "cbl_check_file_exist"
                        using "c:\app1\config\settings.txt"
                              cbl-fileexist-buf
   if return-code = 0
      display message "File size : " cblte-fe-filesize
   else
      display message "File not found"
   end-if.
```
