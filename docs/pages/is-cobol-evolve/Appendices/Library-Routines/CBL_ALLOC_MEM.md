## CBL_ALLOC_MEM

The CBL_ALLOC_MEM library routine dynamically allocates memory.

### Syntax:

```cobol
 CALL "CBL_ALLOC_MEM" USING memPointer
                   BY VALUE memSize
                            flags
                     GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *memPointer* | USAGE POINTER | Receives the pointer to the allocated memory. |
| *memSize* | PIC X(4) COMP-5 | Number of bytes of memory to allocate. |
| *flags* | PIC X(4) COMP-5 | This parameter is ignored. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |

### Examples:

**Example -** Allocate 10 bytes of memory

```cobol
       WORKING-STORAGE SECTION.
       01  mem-pointer     usage pointer.
       77  mem-size        pic x(4) comp-5.
       77  mem-flags       pic x(4) comp-5.

       PROCEDURE DIVISION.
       MAIN.
           move 10 to mem-size
           call "cbl_alloc_mem" using mem-pointer
                             by value mem-size
                                      mem-flags.
```
