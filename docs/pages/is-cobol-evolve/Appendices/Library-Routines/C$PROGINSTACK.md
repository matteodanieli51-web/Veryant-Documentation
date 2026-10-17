## C$PROGINSTACK

This routine determines whether a COBOL program is already present in the current CALL stack.

### Syntax:

```cobol
 CALL "C$PROGINSTACK" USING progName
                     GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *progName* | PIC X(n) | Specifies the program to check. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | wrong parameters. |
| 0 | program not in the stack. |
| 1 | program found in the stack. |

### Examples:

**Example -** Check if a program is in the current CALL stack

```cobol
call "c$proginstack" using "computetax"
if return-code not = 1
   display message "ComputeTax is not in the stack"
end-if
```
