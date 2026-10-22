## C$COPY

The C$COPY library routine copies a file to a destination.

A full path is built according to the working directory before processing the file. This full path may not be valid in c-tree environment where the c-tree server working directory doesn't match with the runtime working directory; in this case, the [C$FSCOPY](./C$FSCOPY) should be used.

The source file and the destination file are locked during the copy process. This guarantees the best performance and file integrity.

### Syntax:

```cobol
 CALL "C$COPY" USING sourceFile
                     destinationFile
                    [fileType]
                    [encryptFlag]
              GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *sourceFile* | PIC X(n) | Specifies the source file name.<br>If the file name starts with "@[DISPLAY]:", the file will be read from the client in an Application Server.<br>If the file name starts with "isf://", the file will be read from the File Server specified in the name. See [The ISF protocol](../../../is-cobol-AS/isCOBOL-File-Server/Client-side-Configuration) for more information. |
| *destinationFile* | PIC X(n) | Specifies the destination file name.<br>If the file name starts with "@[DISPLAY]:", the file will be copied to the client in an Application Server.<br>If the file name starts with "isf://", the file will be copied to the File Server specified in the name. See [The ISF protocol](../../../is-cobol-AS/isCOBOL-File-Server/Client-side-Configuration) for more information. |
| *fileType* | PIC X(1) | Specifies the file type. Valid values are:<br>"I" 	File is Indexed.<br>"R" 	File is Relative.<br>"RX" 	File is Relative. Copy file attributes as well.<br>"S" 	File is binary Sequential, the default.<br>"SX" 	File is binary Sequential. Copy file attributes as well.<br>“T”	File is Line Sequential, handle CR/LF.<br>The default type "S" is suitable to copy  generic disk files like PDFs.<br>File type "I" is useful in cases where the original file is held in more than one physical disk file (for example, JIsam and c-tree files are physically held in two separate files). With File type "I" the file name is passed to the indexed file handler APIs so it must be suitable for them. For example, if the file handler is JIsam, avoid the "dat" extension.<br>The routine retrieves input file and output file full paths according to the current working directory, so it’s not suitable to copy c-tree files as the working directory of the file server may not match the working directory of the runtime. If you have this need, use [C$FSCOPY](./C$FSCOPY).<br>The indexed file is copied record by record using the underlying file handler API functions. The [File Handling Configuration](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) affects this process.<br>The file handler for *sourceFile* and *destinationFile* is specified by the *iscobol.file.index.<sourceFile\>* configuration property and the *iscobol.file.index.<destinationFile\>* configuration property respectively. If these properties are not set, then the generic *iscobol.file.index* setting is considered.<br>File type "T" is useful while copying a line sequential file between client and server and the line separator of the server operating system is different from the line separator of the client operating system (for example between Linux and Windows). C$COPY will take care of this creating a new line sequential file with the proper line separator on the destination system.<br>The source file attributes such as the last modification date and time are not applied to the destination file unless the type parameter is set to "SX" or "RX". |
| *encryptFlag* | PIC 9(1) | This parameter should be used only when the fileType is "I" and the underlying indexed file manager is JIsam.<br>When set to 0 or omitted, it specifies that the input file is not encrypted, so no particular action is required.<br>When set to 1, it specifies that the input file is encrypted, so the output file must be encrypted as well. The encryption key specified by the [iscobol.file.encryption.key \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property is used for decrypting the record read from the input file and encrypting the record written to the output file. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful, the file has been copied. |
| 1 | An error occurred. Neither the input file nor the output file had "@[DISPLAY]:" in their name. The file has not been copied correctly. The most common causes are:<br>- file not found<br>- file locked by another process<br>- lack of permissions<br>Check the runtime log for details. |
| 2 | An error occurred. Either the input file or the output file had "@[DISPLAY]:" in their name. The file has not been copied correctly. The most common causes are:<br>- file not found<br>- file locked by another process<br>- lack of permissions<br>Check the runtime log for details. |
| 3 | Invalid or missing parameter. |

### Examples:

**Example -** Copy file from server to client when running in thin-client mode and backup report on server only

```cobol
working-storage section.
77 sourceFile pic x(256).
77 destFile   pic x(256).
77 retCode    pic s9(9).

procedure division.
...
copy-report-to-client.
   move "/myapp/reports/custlist.txt" to sourceFile
   move "@[DISPLAY]:c:\tmp\reports\custlist.txt" to destFile
   call "c$copy" using sourceFile destFile
          giving retCode.
   if retCode not = 0
      display message "Copy failed with error : " retCode
   else
      display message "File was copied"
   end-if.

backup-report.
   move "/myapp/reports/custlist.txt" to sourceFile
   move "/myapp/backups/reports/custlist.txt" to destFile
   call "c$copy" using sourceFile destFile
          giving retCode.
   if retCode not = 0
      display message "Backup failed with error : " retCode
   else
      display message "File was backed up"
   end-if.
```
