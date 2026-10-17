## M$COPY

The M$COPY library routine copies memory from the source memory area to the destination memory area.

The involved memory regions are usually allocated with the [M$ALLOC](./M$ALLOC) library routine. However, programs compiled with [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option may operate also on a memory regions allocated by external C functions or by a Format 7 [SET](../../Language-Reference/Procedure-Division-Statements/SET) statement.

### Syntax:

```cobol
 CALL "M$COPY" USING destination
                     source
                     length
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *destination* | USAGE POINTER | Specifies the handle to the destination memory region.<br>**Note -** compile with the [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option if you need to share the memory with external C routines. |
| *source* | USAGE POINTER | Specifies the handle to the source memory region.<br>**Note -** compile with the [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option if you need to share the memory with external C routines. |
| *length* | any numeric data item or numeric literal | Specifies the number of bytes to be copied. |

### Examples:

**Example -** Allocate 8 bytes of memory on each handle, fill 1 with X characters and then copy first memory contents to second memory area

```cobol
*> define mem1 and mem2 usage pointer

call "m$alloc" using 8, mem1
call "m$alloc" using 8, mem2
call "m$fill" using mem1, "X", 8
call "m$copy" using mem1, mem2, 8
```
