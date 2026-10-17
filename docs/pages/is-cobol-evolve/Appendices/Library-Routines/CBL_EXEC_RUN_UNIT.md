## CBL_EXEC_RUN_UNIT

The CBL_EXEC_RUN_UNIT library routine creates a synchronous or asynchronous run unit that inherits the environment variables set by the caller program.

### Syntax:

```cobol
 CALL "CBL_EXEC_RUN_UNIT" USING commandLine
                                commandLineLength
                                runUnitId
                                stackSize
                                flags
                     [RETURNING statusCode]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *commandLine* | PIC X(n) | The command passed to the new run unit. This should be the name of a executable file followed by any parameters. |
| *commandLineLength* | PIC X(4) COMP-5 | Specifies the length of the *commandLine* parameter. |
| *runUnitId* | PIC X(8) COMP-5 | Returns the unique handle identifying the new run-unit if bit 0 of *flags* is not set. If bit 0 of *flags* is set, this value is unchanged. |
| *stackSize* | PIC X(4) COMP-5 | Ignored. |
| *flags* | PIC X(4) COMP-5 | This parameter is ignored under Windows.<br>On Linux/Unix this 32-bit word indicates how the new run unit is created as follows:<br>Bit 0: if set to 0, the routine returns to the caller immediately after creating the child process. If set to 1, the routine waits for the new run unit to complete before returning to the caller.<br>Bit 1: ignored<br>Bit 2: if set to 0, the messages that the new run unit prints on stdout and stderr are lost. If set to 1, the messages that the new run unit prints on stdout and stderr are shown in the caller program’s console.<br>Bit 3: reserved, it must be set to 0. |

### Return code:

*statusCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 181 | Invalid parameters. |
| 200 | Internal error. |
| 255 | Program not found. |
| Other non-zero | Returned error code from the executed program. |

### Examples:

**Example -** Run the program “sub” in a separate run unit

```cobol
       working-storage section.
       ...
       01  cmd-line            pic x(512).
       01  cmd-line-len        pic x(04) comp-5 value 512.
       01  run-unit-id         pic x(08) comp-5 value 01.
       01  stack-size          pic x(04) comp-5 value zero.
       01  run-flags           pic x(04) comp-5.
       ...
       procedure division.
       ...
           move h'0007' to run-flags.
           move "iscrun sub"   to cmd-line.
           call "CBL_EXEC_RUN_UNIT" using cmd-line
                                          cmd-line-len
                                          run-unit-id
                                          stack-size
                                          run-flags.
```
