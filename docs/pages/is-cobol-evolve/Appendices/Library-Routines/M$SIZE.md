## M$SIZE

The M$SIZE library routine retrieves the size of a memory region.

The memory region is usually allocated with the [M$ALLOC](./M$ALLOC) library routine. However, programs compiled with [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option may operate also on a memory regions allocated by external C functions or by a Format 7 [SET](../../Language-Reference/Procedure-Division-Statements/SET) statement.

### Syntax:

```cobol
 CALL "M$SIZE" USING memAddress
              GIVING memSize
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *memAddress* | USAGE POINTER | Specifies the handle to the memory region.<br>**Note -** compile with the [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option if you need to share the memory with external C routines. |

### Return code:

*memSize* can be any numeric data item. It receives the size of the memory region pointed by memAddress.

### Examples:

**Example -** Allocate 8 bytes of memory, check if the memory size is 8

```cobol
*> define msize as pic 9(2) and mem1 usage pointer

call "m$alloc" using 8, mem1
call "m$size" using mem1 giving msize
if msize not = 8
   display "Error allocating memory"
end-if
```
