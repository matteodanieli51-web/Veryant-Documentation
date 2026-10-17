## DELETE

The DELETE library routine deletes a file.

### Syntax:

```cobol
 CALL "DELETE" USING fileName
                    [exitCode]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the full or relative pathname of the file to be deleted. |
| *exitCode* | PIC S9(4)  BINARY | Receives the exit code of the command upon return from the operating system. The value is dependent on the underlying operating system. A value of 0, however, indicates success and a non-zero value indicates an error. |

### Examples:

**Example -** Delete the temporary file foo:

```cobol
call "delete" using "C:\Temp\foo".
```
