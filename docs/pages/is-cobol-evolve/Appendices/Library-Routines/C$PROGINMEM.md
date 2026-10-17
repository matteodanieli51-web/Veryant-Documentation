## C$PROGINMEM

This routine returns if a cobol program is already loaded in memory or not.

### Syntax:

```cobol
 CALL "C$PROGINMEM" USING progName
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
| 0 | program not loaded. |
| 1 | program already loaded. |

### Examples:

**Example -** Check if a program is loaded in memory

```cobol
call "c$proginmem" using "computetax"
if return-code not = 1
   display message "ComputeTax is not in memory"
end-if
```
