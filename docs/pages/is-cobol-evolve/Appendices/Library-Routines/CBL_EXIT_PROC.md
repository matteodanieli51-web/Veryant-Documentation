## CBL_EXIT_PROC

The CBL_EXIT_PROC library routine installs and removes exit procedures to be called automatically when the current run unit terminates normally.

### Syntax:

```cobol
 CALL "CBL_EXIT_PROC" USING installFlag
                            programName
                 [RETURNING statusCode]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *installFlag* | any numeric data item or numeric literal | Zero if the exit procedure is to be installed; nonzero if it is to be removed. |
| *programName* | PIC X(n) | Name of the exit procedure to be installed or queried. |

### Return code:

*statusCode* can be any numeric data item and it is always zero.

### Examples:

**Example -** Make a cleaning routine to be called when the current program exits normally

```cobol
call "cbl_exit_proc" using 0, "myclean".
```
