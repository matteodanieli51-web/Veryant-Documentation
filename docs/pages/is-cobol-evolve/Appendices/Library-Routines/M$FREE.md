## M$FREE

The M$FREE library routine releases a previously allocated memory region

The memory region is usually allocated with the [M$ALLOC](./M$ALLOC) library routine. However, programs compiled with [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option may operate also on a memory regions allocated by external C functions or by a Format 7 [SET](../../Language-Reference/Procedure-Division-Statements/SET) statement.

### Syntax:

```cobol
 CALL "M$FREE" USING memAddress
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *memAddress* | USAGE POINTER | Specifies the handle of the memory region to be released.<br>**Note -** compile with the [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option if you need to share the memory with external C routines. |

### Examples:

**Example -** Allocate 8 bytes of memory on each of 2 different handles and release that memory after using it in the program.

```cobol
*> define mem1 and mem2 usage pointer
call "m$alloc" using 8, mem1
call "m$alloc" using 8, mem2
...
call "m$free" using mem1
call "m$free" using mem2
```
