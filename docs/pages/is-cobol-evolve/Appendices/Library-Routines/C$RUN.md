## C$RUN

The library routine runs a program asynchronously. If you want to run a program synchronously, use the [SYSTEM](./SYSTEM) library routine.

### Syntax:

```cobol
 CALL "C$RUN" USING commandLine
             GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *commandLine* | PIC X(n) | Specifies the operating system command to be executed. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Operation failed. |
| 0 | Operation succeeded. |

### Examples:

**Example -** Run a external program asynchronously

```cobol
call "c$run" using "notepad.exe"
```
