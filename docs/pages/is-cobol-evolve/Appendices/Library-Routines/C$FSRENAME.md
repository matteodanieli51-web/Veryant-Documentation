## C$FSRENAME

The C$FSRENAME library routine renames an indexed file by invoking the proper file handler functions.

The configuration properties [iscobol.file.index](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.index.FileName](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) specify which file handler is used.

This routine is particularly suitable for copying files that reside on a remote file server like c-tree. In order to rename files on the local machine, [RENAME](./RENAME) routine should be used instead.

This routine is not supported by DBMaker DCI and DatabaseBridge.

### Syntax:

```cobol
 CALL "C$FSRENAME" USING fileName
                         newName
                         exitStatus
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the name of the indexed file to be renamed.<br>The name is passed to the indexed file handler APIs so it must be suitable for them. For example, if the file handler is c-tree, avoid the "dat" extension. |
| *newName* | PIC X(n) | Specifies the new name of the indexed file.<br>The name is passed to the indexed file handler APIs so it must be suitable for them. For example, if the file handler is c-tree, avoid the "dat" extension. |
| *exitStatus* | any numeric data item | Receives the status of the operation:<br>0             the operation has been executed successfully.<br>1             the operation failed. |

### Examples:

**Example -** Rename an indexed file

```cobol
*> define retCode as pic s9(2)

call "c$fsrename" using "cust" "cust2" retCode.
if retCode not = 0
   display message "Operation failed"
end-if
```
