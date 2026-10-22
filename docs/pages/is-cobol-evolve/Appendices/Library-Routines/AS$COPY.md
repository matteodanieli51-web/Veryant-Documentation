## AS$COPY

In an Application Server environment, the AS$COPY library routine copies a file from the server to the client or vice versa.

The AS$COPY library routine is deprecated and supported only for compatibility to previous versions. The [C$COPY](./C$COPY) routine should be used instead.

### Syntax:

```cobol
 CALL "AS$COPY" USING sourceFile
                      destinationFile
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *sourceFile* | PIC X(n) | Specifies the name of the file to be copied. In an Application Server environment, when the file name starts with "CLIENT:", the file will be copied from the client. |
| *destinationFile* | PIC X(n) | Specifies the name of the destination file. In an Application Server environment, when the file name starts with "CLIENT:", the file will be copied to the client. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful, the file has been copied. |
| 1 | An error occurred, the file has not been copied. |

### Examples:

**Example -** Copy a report text file from the server to the client

```cobol
*> define serverReport and clientReport variables as pic x(n)
move "/myapp/myreports/custlist.txt" to serverReport
move "CLIENT:c:/tmp/reports/custlist.txt" to clientReport
call "as$copy" using serverReport
                     clientReport
```
