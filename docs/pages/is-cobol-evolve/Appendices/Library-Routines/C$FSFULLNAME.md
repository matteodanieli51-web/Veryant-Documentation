## C$FSFULLNAME

The C$FSFULLNAME library routine retrieves an indexed file's full path. The runtime Framework takes advantage of the current file system native functions to check for file existence and obtain its full path.

The routine builds full names according to the [iscobol.file.prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties), the working directory and the mappings set in the environment (see [iscobol.file.env_naming (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties)), then it tries to open the file using the file handler specified by [iscobol.file.index](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.index.FileName](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties). If the opening is successful, the current full name is returned.

The ISF protocol is not supported, so each FILE-PREFIX path that starts with "isf://" is invalid for this routine.

### Syntax:

```cobol
 CALL "C$FSFULLNAME" USING fileName
                           fullName
                    GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the name of the file. |
| *fullName* | PIC X(n) | Receives the full path of fileName. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful, file found. |
| 1 | An error occurred, file not found. |

### Examples:

**Example -** Get the full absolute path to an indexed file

```cobol
call "c$fsfullname" using "customers" fsfullname
display fsfullname

*> The value displayed could be : c:\myapp\data\customers
*> This value is possible if for instance, the c:\myapp\data
*> path is included in the iscobol.file.prefix runtime property
```
