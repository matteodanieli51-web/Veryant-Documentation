## CBL_THREAD_SLEEP

The CBL_THREAD_SLEEP library routine causes the calling thread to give up control to the processor for the given number of milliseconds.

### Syntax:

```cobol
 CALL "CBL_THREAD_SLEEP" USING milliseconds
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *milliseconds* | Any numeric data item or literal | Specifies the time to wait before the program execution is resumed. |

### Examples:

**Example -** Put the program to sleep for half second

```cobol
call "cbl_thread_sleep" using 500
```
