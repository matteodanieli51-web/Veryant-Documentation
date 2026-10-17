## C$CREATE_TMP_FILE

The C$CREATE_TMP_FILE library routine creates a temporary file and returns its name.

The file will be handled as a normal sequential file whose physical name is the one returned by the routine. The program logic must take care of deleting the file when it’s no longer necessary.

### Syntax

```cobol
 CALL "C$CREATE_TMP_FILE" USING fileName
                               [filePrefix]
                               [fileSuffix]
                               [directory]
                         GIVING returnCode
```

### Parameters

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Receives the name of the temporary file that has been created. It must be large enough to store the name, otherwise an error occurs. |
| *filePrefix* | PIC X(n) | Optional. Prefix to be placed at the beginning of the file name. If omitted, or less than 3 digits, then underscores are placed at the beginning of the file name. |
| *fileSuffix* | PIC X(n) | Optional. Suffix to be placed at the end of the file name. |
| *directory* | PIC X(n) | Optional. Directory in which to create the file. If omitted, the file is created in the user Temp folder. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | The file couldn’t be created |
| 2 | *fileName* is missing or it is not big enough to store the full path-name, the file is removed |

### Examples:

**Example -** Create a temporary file to store some customers data

```cobol
working-storage section.
77 dest-file pic x(512).
77 retCode   pic s9(5).
...
procedure division.
...
   call "c$create_tmp_file" using
        dest-file "cust_" ".tmp" "/myapp/tmp"
        giving retCode
   if retCode = 0
      display message "Temp file was created"
   else
      display message "Error creating temp file"
   end-if.
```
