## CBL_READ_FILE

The CBL_READ_FILE library routine reads bytes from a file.

### Syntax:

```cobol
 CALL "CBL_READ_FILE" USING fileHandle
                            offset
                            byteCount
                            flags
                            buffer
                     GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileHandle* | PIC X(4) COMP-X | A handle returned from [CBL_OPEN_FILE](./CBL_OPEN_FILE). |
| *offset* | PIC X(8) COMP-X | The offset in the file at which to read. This field is limited to a maximum value of 4294967295 unless *accessMode* is set to 64 when the file is opened using CBL_OPEN_FILE or CBL_CREATE_FILE. |
| *byteCount* | PIC X(4) COMP-X | Specifies the number of bytes to read. |
| *flags* | PIC X COMP-X | Possible values are:<br>**0...** Returns read content in the *buffer* field<br>**128...** Returns the file size in the *offset* field |
| *buffer* | PIC X(n) | Receives the read bytes . |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| >0 | Error status. |

### Examples:

**Example -** Read the first three bytes of an opened file

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
call "cbl_read_file" using file-handle, ofs,
                           cnt, flg, buff.
```
