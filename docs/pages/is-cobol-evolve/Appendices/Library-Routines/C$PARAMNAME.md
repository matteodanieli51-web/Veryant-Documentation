## C$PARAMNAME

The C$PARAMNAME library routine retrieves the name of a parameter passed by the caller.

**Note:** This routine cannot be used in the Procedure Division of a method. It returns information only on parameters passed by [CALL](../../Language-Reference/Procedure-Division-Statements/CALL), not by [INVOKE](../../Language-Reference/Procedure-Division-Statements/INVOKE). It’s also not supported in FUNCTION-ID programs.

### Syntax:

```cobol
 CALL "C$PARAMNAME" USING paramNum
                          paramName
                   GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *paramNum* | any numeric data item | Specifies the ordinal number of the parameter you want to get the name of. The first parameter in the USING list is identified by 1. |
| *paramName* | any alphanumeric data item | Receives the name of the parameter stripped of any index and reference. For example, if the caller program passes PAR1 or PAR1(4) or PAR1(7:2), the routine always receives "PAR1". |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful.  The paramter name was retrieved. |
| 0 | Operation failed. It was not possible to retrieve the parameter name. The most common causes are:<br>- the parameter is a constant data item (level 78) or literal<br>- the parameter was passed as OMITTED<br>- the program was compiled with the [-ostrip](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option. |

### Examples:

**Example -** Get the name of the first parameter:

```cobol
working-storage section.
77 pname pic x(32).

linkage section.
01 the-string  pic x(512).

procedure division using the-string.
main.
  call "c$paramname" using 1 giving pname.
```
