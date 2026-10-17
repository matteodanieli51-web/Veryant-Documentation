## C$RERR

The C$RERR library routine retrieves extended information about the status of a file after an I/O operation.

### Syntax:

```cobol
 CALL "C$RERR" USING extendStat
                    [textMessage]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *extendStat* | any alphanumeric data item | Specifies the extended file status.<br>The first two characters of the extended file status are identical to the normal FILE STATUS value returned by the runtime for a file operation. The next characters further clarify the reason for the particular FILE STATUS value. The values used here are listed in [File Status Codes](../File-Status-Codes).<br>If a lock timeout occurs when *iscobol.file.lock_manager=com.is.as.locking.InternalLockManager* is set in a thin client environment, the *extendedStat* is a concatenation of the file status and the threadID of the client holding the lock. This threadID is stored in *extendedStat(3:)* and can be up to 10 digits long.<br>If a "file locked" error occurs during an OPEN I-O WITH LOCK because another client opened the file for input, TID=0 is returned. This is because OPEN INPUT doesn't put a real lock on a file, allowing for other clients to open the same file in INPUT mode.<br>Due to the variable length of this value, you should consider to define this parameter as PIC X ANY LENGTH. |
| *textMessage* | any alphanumeric data item | Optional. It contains a text message coming from the host system if available. |

### Examples:

**Example -** Display extended information on a file error

```cobol
*> define crerr-status and rerrname as pic x(n)

display-file-error.
  call "C$RERR"     using crerr-status
  call "C$RERRNAME" using rerrname

  display message "Error " file-status crerr-status " on " rerrname
```
