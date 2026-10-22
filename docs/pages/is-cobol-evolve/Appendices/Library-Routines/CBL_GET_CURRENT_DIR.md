## CBL_GET_CURRENT_DIR

The CBL_GET_CURRENT_DIR library routine returns the current working directory.

**Note -** This routine is supported for compatibility. If you’re writing new programs with isCOBOL, you may consider using [C$CHDIR](./C$CHDIR) instead.

### Syntax:

```cobol
 CALL "CBL_GET_CURRENT_DIR" USING BY VALUE flags
                                  BY VALUE nameLength
                                           directoryName
                                    GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *flags* | PIC X(4) COMP-5 | Reserved. Must be set to 0. |
| *nameLength* | PIC X(4) COMP-5 | Specifies the size in bytes of the *directoryName* parameter. |
| *directoryName* | PIC X(n) | Receives the directory name. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| >0 | Operation failed. |

### Examples:

**Example -** Retrieve and display the current working directory

```cobol
       WORKING-STORAGE SECTION.
       01  dir          pic x(256).
       77  flags        pic x(4) comp-5.
       77  dir-sz       pic x(4) comp-5.

       PROCEDURE DIVISION.
       MAIN.
           set dir-sz to size of dir.
           move 0 to flags.
           call "cbl_get_current_dir" using by value flags,
                                            by value dir-sz
                                                     dir.
           display dir.
```
