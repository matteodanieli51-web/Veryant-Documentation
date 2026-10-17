## CBL_CREATE_FILE

The CBL_CREATE_FILE library routine creates a new file and leaves it open for byte-stream operations.

### Syntax:

```cobol
 CALL "CBL_CREATE_FILE" USING fileName
                              accessMode
                              denyMode
                              device
                              fileHandle
                       GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the name of the file to create. |
| *accessMode* | PIC X COMP-X | Specifies the access mode. Possible values are:<br>**1...** Read only<br>**2...** Write only (*denyMode* must be 0)<br>**3...** Read/write<br>**64...** Read/write files greater than 4Gb |
| *denyMode* | PIC X COMP-X | Specifies the deny mode. Possible values are:<br>**0...** Deny both read and write (exclusive)<br>**1...** Deny write<br>**2...** Deny read<br>**3...** Deny neither read nor write |
| *device* | PIC X COMP-X | This item must be set to zero. |
| *fileHandle* | PIC X(4) COMP-X | Returns an handle to the created file unless an error occurs. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| >0 | Error status. |

### Examples:

**Example -** Create a file and put the return code into file status if the operation fails

```cobol
working-storage section.
...
01  file-status-group.
    03  file-status     pic xx comp-x.
    03  redefines file-status.
        05  fs-byte-1  pic x.
        05  fs-byte-2  pic x comp-x.
01 file-name   pic x(32) value "test".
01 access-mode pic x comp-x value 3.
01 deny-mode   pic x comp-x value 3.
01 device      pic x comp-x value 0.
01 file-handle pic x(4) comp-x.

...
procedure division.
...
call "cbl_create_file" using file-name, access-mode,
                             deny-mode, device, file-handle.
if return-code not = 0
    move return-code to file-status
...
```
