## CBL_ERROR_PROC

The CBL_ERROR_PROC library routine installs or removes error procedures to be called automatically if and when the current run unit generates any of certain runtime errors. This implementation calls error procedures only when a run unit generates what is called an intermediate runtime error.

In order to receive the error information, the error procedure program should include the following Linkage Section parameter:

```cobol
       LINKAGE SECTION.
       77 ERROR-DESC PIC X(325)

       PROCEDURE DIVISION USING ERROR-DESC.
```

**Note:** only errors of the kind java.lang.Exception cause the error procedure to be invoked. This kind of exception is raised for most of the COBOL errors though.

### Syntax:

```cobol
 CALL "CBL_ERROR_PROC" USING installFlag
                             programName
                  [RETURNING statusCode]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *installFlag* | any numeric data item or numeric literal | Zero if the error procedure is to be installed; nonzero if it is to be removed. |
| *programName* | PIC X(n) | Name of the error procedure to be installed or removed. |

### Return code:

*statusCode* can be any numeric data item and it is always zero.

### Examples:

**Example -** Use a specific program to catch runtime errors during the execution of a program, disable it at the end

```cobol
...
set-error-proc.
   call "cbl_error_proc" using 0, "myerrtrap".
...
finish-program.
   call "cbl_error_proc" using 1, "myerrtrap"
   goback.
```
