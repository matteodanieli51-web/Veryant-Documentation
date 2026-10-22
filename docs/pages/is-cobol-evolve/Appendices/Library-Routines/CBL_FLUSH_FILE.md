## CBL_FLUSH_FILE

The CBL_FLUSH_FILE library routine ensures all file buffers for a file are written to disk.

### Syntax:

```cobol
 CALL "CBL_FLUSH_FILE" USING fileHandle
                      GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileHandle* | PIC X(4) COMP-X | A handle returned from [CBL_OPEN_FILE](./CBL_OPEN_FILE)or [CBL_CREATE_FILE](./CBL_CREATE_FILE). |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| >0 | todo |

### Examples:

**Example -** Flush a previously opened byte-stream

```cobol
       ...
       working-storage section.
       ...
       77 file-handle pic x(4) comp-x.
       ...
       procedure division.
       ...
           call "cbl_flush_file" using file-handle.
       ...
```
