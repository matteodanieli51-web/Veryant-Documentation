## C$GETLASTFILENAME

The C$GELASTFILENAME library routine is used to retrieve the last file name and path used in a I/O statement.

### Syntax:

```cobol
 CALL "C$GETLASTFILENAME" USING fileName
                               [filePath]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Receives the file name. |
| *filePath* | PIC X(n) | Optional. Receives the file path. |

### Examples:

**Example -** Get the filename and path of the last file used on a I/O stmt along with the last I/O file operation

```cobol
*> define fileName, filePath and fileOp as pic x(n)
display-io-error.
   ...
   call "c$getlastfilename" using fileName filePath
   call "c$getlastfileop"   using fileOp
   *> assuming the file error code was already moved to a general variable
   display message "Error code    : " fs-code   x"0d0a"
                   "I/O Operation : " fileOp    x"0d0a"
                   "On file       : " fileName  x"0d0a"
                   "File path     : " filePath.
```
