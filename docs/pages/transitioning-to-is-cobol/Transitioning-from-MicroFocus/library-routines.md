## Library routines

- The following Micro Focus library routines are supported by isCOBOL:

| Micro Focus routine | Known Limitations and differences |
| --- | --- |
| CBL_ALLOC_MEM | The flags parameter is ignored. |
| CBL_AND |  |
| CBL_CHANGE_DIR | CBL_CHANGE_DIR as implemented by isCOBOL doesn’t actually change the working directory, it just specifies path that the framework must put before relative file names during i/o. External functions like commands run through C$SYSTEM or system API functions don’t use the directory set by CBL_CHANGE_DIR as working directory. |
| CBL_CHECK_FILE_EXIST |  |
| CBL_CLEAR_SCR |  |
| CBL_CLOSE_FILE |  |
| CBL_COPY_FILE |  |
| CBL_CREATE_FILE |  |
| CBL_CREATE_DIR |  |
| CBL_DELETE_DIR |  |
| CBL_DELETE_FILE |  |
| CBL_DIR_SCAN_END |  |
| CBL_DIR_SCAN_READ |  |
| CBL_DIR_SCAN_START |  |
| CBL_EQ |  |
| CBL_ERROR_PROC | The usage in Micro Focus is: 77 proc usage procedure-pointer.set proc to entry "err-prog"call "cbl_error_proc" using flag, proc The corresponding usage in isCOBOL is: call "cbl_error_proc" using flag, "err-prog" |
| CBL_EXEC_RUN_UNIT | A dedicated console cannot be assigned to a new run unit in isCOBOL. You can either share the stdout and stderr of a new run unit with the caller program or lose the messages that the new run unit prints.The closest isCOBOL functionality is using environment variables. |
| CBL_EXIT_PROC |  |
| CBL_FLUSH_FILE |  |
| CBL_FREE_MEM |  |
| CBL_GET_CURRENT_DIR |  |
| CBL_GET_KBD_STATUS |  |
| CBL_GET_SCR_SIZE |  |
| CBL_IMP |  |
| CBL_JOIN_FILENAME |  |
| CBL_LOCATE_FILE | Searching for files in libraries is not supported. |
| CBL_NOT |  |
| CBL_OPEN_FILE |  |
| CBL_OR |  |
| CBL_READ_DIR |  |
| CBL_READ_FILE |  |
| CBL_READ_KBD_CHAR |  |
| CBL_READ_SCR_CHARS |  |
| CBL_READ_SCR_CHATTRS | It handles only the attributes HIGHLIGHT, UNDERLINE and REVERSE-VIDEO assuming that colours are not used. |
| CBL_RENAME_FILE |  |
| CBL_SPLIT_FILENAME |  |
| CBL_THREAD_SLEEP |  |
| CBL_TOLOWER |  |
| CBL_TOUPPER |  |
| CBL_WRITE_FILE |  |
| CBL_WRITE_SCR_CHARS |  |
| CBL_WRITE_SCR_CHATTRS | It handles only the attributes HIGHLIGHT, UNDERLINE and REVERSE-VIDEO assuming that colours are not used. |
| CBL_WRITE_SCR_N_CHAR |  |
| CBL_WRITE_SCR_N_CHATTR | It handles only the attributes HIGHLIGHT, UNDERLINE and REVERSE-VIDEO assuming that colours are not used. |
| CBL_XOR |  |
| SYSTEM |  |

All the other routines must be replaced with the corresponding isCOBOL routine or with an isCOBOL syntax that has the same effect, if possible.

The following table lists the known solutions to obtain the same effect of Micro Focus routines.

| Micro Focus routine | isCOBOL solution |
| --- | --- |
| _CODESET | use C$CODESET routine |
| CBL_ABORT_RUN_UNIT | use STOP RUN statement |
| CBL_ALLOC_DYN_MEMCBL_ALLOC_SHMEMCBL_ALLOC_THREAD_MEM | use M$ALLOC routine |
| CBL_CANCEL | use CANCEL statement |
| CBL_DEBUGBREAK | A similar feature can be obtained with the STOP statement. |
| CBL_FILENAME_CONVERT | Use INSPECT... REPLACING statement |
| CBL_FREE_DYN_MEM | use M$FREE routine |
| CBL_FREE_RECORD_LOCK | use R$IO routine |
| CBL_GET_CSR_POS | test the CURSOR Special Name |
| CBL_GET_MOUSE_STATUS | use W$MOUSE routine, GET-MOUSE-STATUS function |
| CBL_GET_OS_INFO | use C$SYSINFO routine |
| CBL_INIT_MOUSECBL_TERM_MOUSE | no need to enable/disable the mouse support. It’s always enabled by default in isCOBOL |
| CBL_MANAGED_SESSION_GET_USERDATACBL_MANAGED_SESSION_SET_USERDATA | the closer thing to this feature are the environment variables that you can set with SET ENVIRONMENT and inquire with ACCEPT FROM ENVIRONMENT |
| CBL_NLS_INFO | it’s possible to get (but not to set) national language information by calling the C$GETENV routine |
| CBL_TEST_RECORD_LOCK | use R$IO routine |
| JVM_LOAD_NATIVE | use CALL statement |
| PC_PRINTER_CLOSE | use CLOSE statement on the print-file[A] |
| PC_PRINTER_CONTROL | use WRITE statement on the print-record[B] with BEFORE and AFTER clauses |
| PC_PRINTER_DEFAULT_FONT | use WIN$PRINTER routine, WINPRINT-SET-FONT function |
| PC_PRINTER_DEFAULT_NAME | use WIN$PRINTER routine, WINPRINT-SET-PRINTER function |
| PC_PRINTER_DEFAULT_PROPERTIES | use WIN$PRINTER routine, WINPRINT-SET-PRINTER-EX function |
| PC_PRINTER_FREE_BMP | use W$BITMAP routine, WBITMAP-DESTROY function (to be done after closing the print-file[A]) |
| PC_PRINTER_INFO | use WIN$PRINTER routine, WINPRINT-GET-CURRENT-INFO-EX and WINPRINT-GET-PRINTER-INFO-EX functions |
| PC_PRINTER_LOAD_BMP | use W$BITMAP routine, WBITMAP-LOAD function |
| PC_PRINTER_OPEN | use OPEN OUTPUT statement on the print-file[A] |
| PC_PRINTER_SET_COLOR | use WIN$PRINTER routine, WINPRINT-SET-BACKGROUND-COLOR and WINPRINT-SET-TEXT-COLOR functions |
| PC_PRINTER_SET_DEFAULT | use WIN$PRINTER routine, WINPRINT-SET-PRINTER function |
| PC_PRINTER_SET_FONT | use WIN$PRINTER routine, WINPRINT-SET-FONT function |
| PC_PRINTER_WRITE | use WRITE statement on the print-record[B] |
| PC_PRINTER_WRITE_BMP | use WIN$PRINTER routine, WINPRINT-PRINT-BITMAP function |
| PC_READ_DRIVE | retrieve the current directory (see CBL_GET_CURRENT_DIR above) and consider only the first byte. |
| X"91" function 16 | use C$NARG routine |
| X"AF" function 22X"E5" | use WIN$PLAYSOUND routine |

[A] *print-file* is a sequential file defined as follows

```cobol
SELECT print-file ASSIGN TO PRINT "-P SPOOLER".
```

[B] *print-rec* is the record definition for print-file, it's size should match the max number of digits that can be printed on a line. E.g.

```cobol
FD print-file.
01 print-rec PIC X(80).
```

If the routine that you’re looking for doesn’t appear in the above list, contact Veryant’s support to discuss about possible solutions.
