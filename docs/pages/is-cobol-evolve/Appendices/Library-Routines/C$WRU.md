## C$WRU

The C$WRU library routine returns the name of the program that has called the currently running program.

**Note -** This routine is supported for RM/COBOL compatibility. In order to know the name of the caller program, you should consider using [C$CALLEDBY](./C$CALLEDBY) instead.

### Syntax:

```cobol
 CALL "C$WRU" USING programName,
                    programLine, programIntraLine
             GIVING returnCode.
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *programName* | PIC X(n) | Receives the name of the calling program.<br>If this routine is called by the main program, "RUNCOBOL" is returned. |
| *programLine* | PIC 9(n) | Receives 0. |
| *programIntraLine* | PIC 9(n) | Receives 0. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | The currently running program has been called by another isCOBOL program. |
| 0 | The caller program name couldn’t be retrieved. Possible causes are: |
| -1 | Missing or invalid parameter. |

### Examples:

**Example -** Retrieve the name of the calling program

```cobol
*> define calling-program as pic x(n)
*> define foo-1 and foo-2 as pic 9

call "c$wru" using calling-program, foo-1, foo-2.
```
