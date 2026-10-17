## M$GET

The M$GET library routine copies the content of a memory region to a data item.

The memory region is usually allocated with the [M$ALLOC](./M$ALLOC) library routine. However, programs compiled with [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option may operate also on a memory regions allocated by external C functions or by a Format 7 [SET](../../Language-Reference/Procedure-Division-Statements/SET) statement.

### Syntax:

```cobol
 CALL "M$GET" USING memAddress
                    dataItem
                   [dataSize]
                   [dataOffset]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *memAddress* | USAGE POINTER | Specifies the handle to the source memory region.<br>**Note -** compile with the [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option if you need to share the memory with external C routines. |
| *dataItem* | PIC X(n) | Receives the content of memory region pointed by memAddress. |
| *dataSize* | any numeric data item or numeric literal | Specifies the number of bytes to be moved to dataItem. If this parameter is omitted, all the allocated memory is moved to dataItem. |
| *dataOffset* | any numeric data item or numeric literal | Specifies the memory offset from which the data will be copied. The default value is 1. |

### Examples:

**Example -** Allocate 8 bytes of memory, put a value in it and then query the value putting it into a pic x(8) variable

```cobol
*> define mem1 usage pointer
*> define str1 as pic x(8)
call "m$alloc" using 8, mem1
call "m$put" using mem1, "Hello", 8, 1
call "m$get" using mem1, str1, 8, 1
```
