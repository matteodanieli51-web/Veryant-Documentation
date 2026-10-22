## CBL_CLOSE_FILE

The CBL_CLOSE_FILE library routine closes a file opened for byte-stream operations.

### Syntax:

```cobol
 CALL "CBL_CLOSE_FILE" USING fileHandle
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
| >0 | Operation failed, the return code must be processed as file status. |

### Examples:

**Example -** Close a previously opened byte-stream

```cobol
       ...
       working-storage section.
       ...
       77 file-handle pic x(4) comp-x.
       ...
       procedure division.
       ...
           call "cbl_close_file" using file-handle.
       ...
```
