## C$RERRNAME

The C$RERRNAME library routine retrieves the name of the latest file used by a COBOL I/O statement.

### Syntax:

```cobol
 CALL "C$RERRNAME" USING fileName
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Receives the full pathname of the latest file used by a COBOL I/O statement, followed by its logical name enclosed in parentheses. |

### Examples:

**Example -** Display extended information on a file error

```cobol
*> define crerr-status and rerrname as pic x(n)

display-file-error.
  call "C$RERR"     using crerr-status
  call "C$RERRNAME" using rerrname

  display message "Error " file-status crerr-status " on " rerrname
```
