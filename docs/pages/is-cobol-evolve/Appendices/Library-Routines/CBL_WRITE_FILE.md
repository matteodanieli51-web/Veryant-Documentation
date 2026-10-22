## CBL_WRITE_FILE

The CBL_WRITE_FILE library routine writes bytes from a file.

### Syntax:

```cobol
 CALL "CBL_WRITE_FILE" USING fileHandle
                             offset
                             byteCount
                             flags
                             buffer
                      GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileHandle* | PIC X(4) COMP-X | A handle returned from [CBL_OPEN_FILE](./CBL_OPEN_FILE)or [CBL_CREATE_FILE](./CBL_CREATE_FILE). |
| *offset* | PIC X(8) COMP-X | The offset in the file at which to write. This field is limited to a maximum value of 4294967295 unless *accessMode* is set to 64 when the file is opened using CBL_OPEN_FILE or CBL_CREATE_FILE. |
| *byteCount* | PIC X(4) COMP-X | Specifies the number of bytes to write. Setting this parameter to zero causes the file to be truncated or extended to the size specified in the file-offset field. |
| *flags* | PIC X COMP-X | Must be zero. |
| *buffer* | PIC X(n) | Specifies the bytes to be written. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| >0 | Error status. |

### Examples:

**Example -** Rewrite the first three bytes of an opened file

```cobol
working-storage section.
...
01 file-handle pic x(4) comp-x.
01 ofs         pic x(8) comp-x.
01 cnt         pic x(4) comp-x.
01 flg         pic x comp-x value 0.
01 buff        pic x(3).
...
procedure division.
...
move 1 to ofs.
move 3 to cnt.
move "xxx" to buff.
call "cbl_write_file" using file-handle, ofs,
                           cnt, flg, buff.
```
