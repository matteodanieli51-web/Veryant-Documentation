## C$FULLNAME

The C$FULLNAME library routine retrieves a file's full path. The runtime Framework follows the rules described in [File names interpretation](../../Language-Reference/Environment-Division/Input-Output-Section/File-Names-Interpretation) to resolve the name of the file.

### Syntax:

```cobol
 CALL "C$FULLNAME" USING fileName
                         fullName
                        [fileInfo]
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the name of the file. This should either be a full path name or a name relative to the current directory. |
| *fullName* | PIC X(n) | Receives the full path of fileName.<br>If FILE-PREFIX includes paths starting with "isf://" and the file is found on the specified File Server, a name in the form "isf://servername[:port]:/path/to/file" is returned. See [The ISF protocol](../../../is-cobol-AS/isCOBOL-File-Server/Client-side-Configuration) for more information. |
| *fileInfo* | Group Item | Receives the file information. It must have the following structure:<br>*fileSize*<br>Size of the file.<br>*fileDate*<br>Date of the file, in YYYYMMDD format.<br>*fileTime*<br>Time of the file. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful, file found. |
| 1 | An error occurred, file not found. |

### Examples:

**Example -** Get the full absolute path to any file

```cobol
call "c$fullname" using "customers.dat" fullname
display fullname
*> The value displayed could be : c:\myapp\data\customers.dat
```
