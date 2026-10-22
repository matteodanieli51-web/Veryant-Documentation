## M$FILL

The M$FILL library routine fills a previously allocated memory region with a specific value.

The memory region is usually allocated with the [M$ALLOC](./M$ALLOC) library routine. However, programs compiled with [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option may operate also on a memory regions allocated by external C functions or by a Format 7 [SET](../../Language-Reference/Procedure-Division-Statements/SET) statement.

### Syntax:

```cobol
 CALL "M$FILL" USING destination
                     value
                     length
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *destination* | USAGE POINTER | Specifies the handle to the destination memory region.<br>**Note -** compile with the [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option if you need to share the memory with external C routines. |
| *value* | PIC X | Specifies the value to be copied to destination. |
| *length* | any numeric data item or numeric literal | Specifies the number of bytes to be copied. |

### Examples:

**Example -** Allocate 8 bytes of memory, fill the memory area with all "A" characters

```cobol
*> define mem1 usage pointer
call "m$alloc" using 8, mem1
call "m$fill" using mem1, "A", 8
```
