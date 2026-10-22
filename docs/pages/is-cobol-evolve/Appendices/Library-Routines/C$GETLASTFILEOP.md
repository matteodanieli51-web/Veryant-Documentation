## C$GETLASTFILEOP

The C$GELASTFILEOP library routine returns the name of the last i-o operation.

### Syntax:

```cobol
 CALL "C$GETLASTFILEOP" USING fileOp
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileOp* | PIC X(n) | Receives the operation name. Possible values are:<br>"Close"<br>"Delete"<br>"DeleteFile"<br>"DeleteRandom"<br>"Open"<br>"ReadNext"<br>"ReadPrevious"<br>"ReadRandom"<br>"Rewrite"<br>"RewriteRandom"<br>"Start"<br>"Unlock"<br>"Write"<br>"WriteRandom" |

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
