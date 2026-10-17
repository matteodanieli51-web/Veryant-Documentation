## M$ALLOC

The M$ALLOC library routine dynamically allocates memory.

### Syntax:

```cobol
 CALL "M$ALLOC" USING memSize
                      memAddress
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *memSize* | any numeric data item or numeric literal | Specifies the number of bytes to be allocated. |
| *memAddress* | USAGE POINTER | Receives the handle to the allocated memory. If the allocation fails the this item is set to NULL.<br>**Note -** compile with the [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option if you need to share the memory with external C routines. |

### Examples:

**Example -** Allocate 8 bytes of memory on each handle and put the words Hello World in them

```cobol
*> define mem1 and mem2 usage pointer

call "m$alloc" using 8, mem1
call "m$alloc" using 8, mem2
call "m$put" using mem1, "Hello", 8, 1
call "m$put" using mem2, "World", 8, 1
```
