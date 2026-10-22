## M$PUT

The M$PUT library routine copies the content of data item to a memory region.

The memory region is usually allocated with the [M$ALLOC](./M$ALLOC) library routine. However, programs compiled with [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option may operate also on a memory regions allocated by external C functions or by a Format 7 [SET](../../Language-Reference/Procedure-Division-Statements/SET) statement.

### Syntax:

```cobol
 CALL "M$PUT" USING  memAddress
                     dataItem
                    [dataSize]
                    [dataOffset]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *memAddress* | USAGE POINTER | Specifies the handle to the destination memory region.<br>**Note -** compile with the [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option if you need to share the memory with external C routines. |
| *dataItem* | PIC X(n) | Specifies the content of memory region pointed by memAddress. |
| *dataSize* | any numeric data item or numeric literal | Specifies the number of bytes to be moved from dataItem. If this parameter is omitted, the entire content of dataItem is copied. |
| *dataOffset* | any numeric data item or numeric literal | Specifies the memory offset from which the data will be copied from. The default value is 1. |

### Examples:

**Example -** Allocate 8 bytes of memory, put a value in it

```cobol
*> define mem1 usage pointer
call "m$alloc" using 8, mem1
call "m$put" using mem1, "Hello", 8, 1
```
