## CBL_FREE_MEM

The CBL_FREE_MEM library routine frees dynamically allocated memory.

### Syntax:

```cobol
 CALL "CBL_FREE_MEM" USING BY VALUE memPointer
                             GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *memPointer* | USAGE POINTER | A pointer returned by [CBL_ALLOC_MEM](./CBL_ALLOC_MEM) |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |

### Examples:

**Example -** Free the memory pointed by mem-pointer

```cobol
call "cbl_free_mem" using by value mem-pointer.
```
