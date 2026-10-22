## C$FSCOPY

The C$FSCOPY library routine copies an indexed file by invoking the proper file handler functions.

The indexed file is copied record by record using the underlying file handler API functions. The [File Handling Configuration](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) affects this process.

This routine is particularly suitable for copying files that reside on a remote file server like c-tree. In order to copy files on the local machine, [C$COPY](./C$COPY) routine should be used instead.

The source file and the destination file are locked during the copy process. This guarantees the best performance and file integrity.

### Syntax:

```cobol
 CALL "C$FSCOPY" USING inputFile
                       outputFile
                      [encryptFlag]
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *inputFile* | PIC X(n) | Specifies the name of the indexed file to be copied.<br>The name is passed to the indexed file handler APIs so it must be suitable for them. For example, if the file handler is c-tree, avoid the "dat" extension.<br>The file handler for *inputFile* is specified by the *iscobol.file.index.<inputFile\>* configuration property. If this property is not set, then the generic *iscobol.file.index* setting is considered. |
| *outputFile* | PIC X(n) | Specifies the name of the indexed file to be created.<br>The name is passed as is to the file handler.<br>The file handler for *outputFile* is specified by the *iscobol.file.index.<outputFile\>* configuration property. If this property is not set, then the generic *iscobol.file.index* setting is considered. |
| *encryptFlag* | PIC 9(1) | This parameter should be used only when the underlying indexed file manager is JIsam.<br>When set to 0 or omitted, it specifies that the input file is not encrypted, so no particular action is required.<br>When set to 1, it specifies that the input file is encrypted, so the output file must be encrypted as well. The encryption key specified by the [iscobol.file.encryption.key \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property is used for decrypting the record read from the input file and encrypting the record written to the output file. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | An error occurred. The most common causes are:<br>- file not found<br>- file locked by another process<br>- lack of permissions |

### Examples:

**Example -** Make a backup copy of an indexed file

```cobol
*> define retCode as pic s9(2)

call "c$fscopy" using "cust"
                      "cust_bk"
               giving retCode
if retCode not = 0
   display message "File backup has failed"
end-if
```
