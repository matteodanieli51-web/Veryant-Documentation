## C$UNLOAD

The C$UNLOAD library routine removes COBOL programs class definition from memory so they’re reloaded from disc the next time they’re called. In order to work, [iscobol.code_prefix.reload \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) must be set to 0 or 2.

### Syntax:

```cobol
 CALL "C$UNLOAD" USING programNames
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *programNames* | PIC X(n) | Specifies the name of the programs to be unloaded.<br>Note that only standard programs (with PROGRAM-ID) can be unloaded with this routine. Objects (with CLASS-ID) are unloaded automatically by unloading the program that instantiated them.<br>If this parameter is omitted, set to spaces or set to "\*", then all programs are unloaded.<br>Multiple program names can be specified. They must be separated by a line feed (X"0A"). The "\*" wildcard character is supported at the end of the program name to unload all the programs whose name begins with the same characters.<br>You should pass the same name used in the CALL statement. For example, if you used *CALL "dir1\PROG1"*, pass "dir1\PROG1" to C$UNLOAD, not just "PROG1".<br>This parameter is ignored when iscobol.code_prefix.reload is set to 2. |

### Return code:

*returnCode* can be any signed numeric data item. It returns the number of programs that were actually unloaded.

### Examples:

**Example -** Unload some programs from memory:

```cobol
       working-storage section.
       77 unload-list pic x any length.

       procedure division.
      *the following programs will be unloaded:
      * CUSTADM
      * ORD1A
      * ORD1B
           initialize unload-list.
           string "CUSTADM" x"0a" "ORD1*"
                  delimited by size
                  into unload-list.
           call "c$unload" using unload-list.
```
