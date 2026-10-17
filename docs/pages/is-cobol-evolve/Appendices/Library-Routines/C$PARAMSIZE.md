## C$PARAMSIZE

The C$PARAMSIZE library routine retrieves the [LENGTH](../Intrinsic-Functions/LENGTH) of a parameter passed by the caller.

**Note:** This routine cannot be used in the Procedure Division of a method. It returns information only on parameters passed by [CALL](../../Language-Reference/Procedure-Division-Statements/CALL), not by [INVOKE](../../Language-Reference/Procedure-Division-Statements/INVOKE). It’s also not supported in FUNCTION-ID programs.

### Syntax:

```cobol
 CALL "C$PARAMSIZE" USING paramNum
                   GIVING paramSize
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *paramNum* | any numeric data item | Specifies the ordinal number of the parameter you want to get the size of. The first parameter in the USING list is identified by 1. |

### Return code:

*paramSize* can be any signed numeric data item. It receives the size of the parameter or -1 if the parameter was not passed.

### Examples:

**Example -** A program that may receive a variable size string to process it

```cobol
working-storage section.
77 str-size pic s9(5).

linkage section.
01 the-string  pic x(512).

procedure division using the-string.
main.
  call "c$paramsize" using 1 giving str-size
  if str-size > 0
     inspect the-string(1:str-size) replacing all "," by "|"
  end-if.
  goback.
```
