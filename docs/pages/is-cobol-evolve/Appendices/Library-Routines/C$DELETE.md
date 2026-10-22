## C$DELETE

The C$DELETE library routine deletes a file.

A full path is built according to the working directory before processing the file. This full path may not be valid in c-tree environment where the c-tree server working directory doesn't match with the runtime working directory; in this case, the [C$FSDELETE](./C$FSDELETE) should be used.

### Syntax:

```cobol
 CALL "C$DELETE" USING fileName
                      [fileType]
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the name of the file to be deleted.<br>If the file name starts with "@[DISPLAY]:", the file will be  searched on the client in an Application Server.<br>If the file name starts with "isf://", the file will be searched via the File Server specified in the name. See [The ISF protocol](../../../is-cobol-AS/isCOBOL-File-Server/Client-side-Configuration) for more information. |
| *fileType* | PIC X(1) | Specifies the file type. Valid values are:<br>"I" 	File is Indexed.<br>"R" 	File is Relative.<br>"S" 	File is binary Sequential, the default.<br>The default type "S" is suitable to delete  generic disk files like PDFs.<br>File type "I" is useful in cases where the original file is held in more than one physical disk file (for example, JIsam and c-tree files are physically held in two separate files). With File type "I" the file name is passed to the indexed file handler APIs so it must be suitable for them. For example, if the file handler is JIsam, avoid the "dat" extension and use a server side path. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful, the file has been deleted. |
| 1 | An error occurred, the file has not been deleted. |

### Examples:

**Example -** Delete a temporary file

```cobol
*> define retCode as pic 9(n)

call "c$delete" using "/myapp/tmp/cust_828383838322323.tmp"
     giving retCode
if retCode = 0
   display message "Temp file was deleted"
else
   display message "Error deleting temp file"
end-if.
```
