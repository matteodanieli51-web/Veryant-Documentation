## C$FSDELETE

The C$FSDELETE library routine deletes an indexed file by invoking the proper file handler functions.

The configuration properties [iscobol.file.index](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.index.FileName](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) specify which file handler is used.

This routine is particularly suitable for copying files that reside on a remote file server like c-tree. In order to delete files on the local machine, [C$DELETE](./C$DELETE) routine should be used instead.

### Syntax:

```cobol
 CALL "C$FSDELETE" USING inputFile
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *inputFile* | PIC X(n) | Specifies the name of the indexed file to be deleted.<br>The name is passed to the indexed file handler APIs so it must be suitable for them. For example, if the file handler is c-tree, avoid the "dat" extension. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | An error occurred. |

### Examples:

**Example -** Delete an indexed file

```cobol
*> define retCode as pic s9(2)

call "c$fsdelete" using "cust"
                 giving retCode
if retCode not = 0
   display message "Operation failed"
end-if
```
