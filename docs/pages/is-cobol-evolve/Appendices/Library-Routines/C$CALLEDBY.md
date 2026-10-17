## C$CALLEDBY

The C$CALLEDBY library routine returns the name of the program that has called the currently running program.

### Syntax:

```cobol
 CALL "C$CALLEDBY" USING  callingProgram
                   GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *callingProgram* | PIC X(n) | Receives the name of the caller. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | The currently running program has been called by another isCOBOL program. |
| 0 | The caller program name couldn’t be retrieved. Possible causes are: |
| -1 | Missing or invalid parameter. |

### Examples:

**Example -** Display what program called the current one in the beginning of the program

```cobol
working-storage section.
77 calling-prg  pic x(256).
...
procedure division.
main.
  call "c$calledby" using calling-prg
  if calling-prg = spaces
     display message "No program called me"
  else
     display message "I was called by program : " calling-prg
  end-if.
```
