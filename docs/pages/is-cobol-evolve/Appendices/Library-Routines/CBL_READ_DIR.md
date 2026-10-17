## CBL_READ_DIR

The CBL_READ_DIR library routine returns the current directory.

On Windows systems, the returned pathname is stripped of the drive.

### Syntax:

```cobol
 CALL "CBL_READ_DIR" USING pathName
                           pathNameLength
                    GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *pathName* | PIC X(n) | Receives the directory path name |
| *pathNameLength* | PIC X(2) COMP-X | Specifies the length in bytes of the *pathName* parameter |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |

### Examples:

**Example -** Retrieve and display the current directory

```cobol
       WORKING-STORAGE SECTION.
       01  dir          pic x(256).
       77  dir-sz       pic x(2) comp-x.

       PROCEDURE DIVISION.
       MAIN.
           set dir-sz to size of dir.
           call "cbl_read_dir" using dir, dir-sz.
           display dir.
```
