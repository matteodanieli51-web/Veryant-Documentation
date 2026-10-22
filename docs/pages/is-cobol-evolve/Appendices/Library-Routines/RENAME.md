## RENAME

The RENAME library routine renames a file.

Many aspects of the behavior of this routine are inherently platform-dependent: The rename operation might not be able to move a file from one filesystem to another, it might not be atomic, and it might not succeed if a file with the destination abstract pathname already exists. The return value should always be checked to make sure that the rename operation was successful.

A full path is built according to the working directory before processing the file. This full path may not be valid in c-tree environment where the c-tree server working directory doesn't match with the runtime working directory; in this case, the [C$FSRENAME](./C$FSRENAME) should be used.

This routine is not supported by DBMaker DCI and DatabaseBridge.

### Syntax:

```cobol
 CALL "RENAME" USING sourceFile
                     destFile
                     renameStatus
                    [fileType]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *sourceFile* | PIC X(n) | Specifies the name of the file you want to rename.<br>If the file name starts with "isf://", the file will be searched via the File Server specified in the name. See [The ISF protocol](../../../is-cobol-AS/isCOBOL-File-Server/Client-side-Configuration) for more information. |
| *destFile* | PIC X(n) | Specifies the new file name. |
| *renameStatus* | any numeric data item | Receives the status of the operation:<br>0             the operation has been executed successfully.<br>1             the operation failed. |
| *fileType* | PIC X(1) | Specifies the file type. Valid values are:<br>"I" 	File is Indexed.<br>"R" 	File is Relative.<br>"S" 	File is binary Sequential, the default.<br>The default type "S" is suitable to rename  generic disk files like PDFs.<br>File type "I" is useful in cases where the original file is held in more than one physical disk file (for example, JIsam and c-tree files are physically held in two separate files). With File type "I" the file name is passed to the indexed file handler APIs so it must be suitable for them. For example, if the file handler is JIsam, avoid the "dat" extension and use a server side path. |

### Examples:

**Example -** Rename an ISAM file

```cobol
call "rename" using "CUST", "CUST2015", renameStatus, "I"
if renameStatus not = 0
   display message "Rename failed!"
end-if
```

```cobol
call "rename" using "cust.list" "custJan14.list" renameStatus
if renameStatus not = 0
   display message "Rename failed!"
end-if
```
