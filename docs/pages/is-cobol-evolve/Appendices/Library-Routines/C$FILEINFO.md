## C$FILEINFO

The C$FILEINFO library routine retrieves information about a file.

### Syntax:

```cobol
 CALL "C$FILEINFO" USING fileName
                         fileInfo
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the name of the file. This should either be a full path name or a name relative to the current directory.<br>If the routine can’t find the file specified by *fileName* as is, the routine tries a second time after appending the file extension. The file extension is the first applicable between: |
| *fileInfo* | Group Item | Receives the file information. It must have the following structure:<br>*fileSize*<br>Size of the file in bytes.<br>*fileDate*<br>Last modified date of the file, in YYYYMMDD format.<br>*fileTime*<br>Last modified time of the file. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful, file information has been retrieved. |
| 1 | An error occurred, no information retrieved. |

### Example:

**Example -** Retrieve file information for a specific file

```cobol
working-storage section.
01 file-info.
   02 file-size pic x(8) comp-x.
   02 file-date pic 9(8) comp-x.
   02 file-time pic 9(8) comp-x.
77 file-name    pic x(256).
77 retCode      pic s9(2).
...
procedure division.
...
   move "c:\myapp\resources\properties1.txt" to file-name
   call "c$fileinfo" using file-name, file-info
        giving retCode
   if retCode = 0
      display message "File size   : " file-size x"0d0a"
                      "Last update : " file-date " - " file-time
   else
      display message "File information could not be retrieved"
   end-if.
```
