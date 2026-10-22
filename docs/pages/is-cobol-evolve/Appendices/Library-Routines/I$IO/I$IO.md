## I$IO

The I$IO routine provides a low-level interface to indexed files allowing them to be managed without knowing their FD.

The configuration properties [iscobol.file.index](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.index.FileName](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) specify which file handler is used.

The following configuration properties are ignored: [iscobol.file.case](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties), [iscobol.file.prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.indexed_file_prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

**Note -** due to the use of external data items, this routine is not thread safe.

### Syntax:

```cobol
 CALL "I$IO" USING opCode
                   parameters
            GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Specifies the file handling function to be performed.<br>Valid values, defined in [isfilesys.def](../../Copybooks/isfilesys.def) are: |  |
|  | [OPEN-FUNCTION](./OPEN-FUNCTION) | Opens an existing file |
|  | [CLOSE-FUNCTION](./CLOSE-FUNCTION) | Closes an opened file |
|  | [MAKE-FUNCTION](./MAKE-FUNCTION) | Creates an empty file |
|  | [INFO-FUNCTION](./INFO-FUNCTION) | Returns file information |
|  | [READ-FUNCTION](./READ-FUNCTION) | Reads a specific record of a file |
|  | [NEXT-FUNCTION](./NEXT-FUNCTION) | Reads the next record of a file |
|  | [PREVIOUS-FUNCTION](./PREVIOUS-FUNCTION) | Reads the previous record of a file |
|  | [START-FUNCTION](./START-FUNCTION) | Sets the file pointer on a specific record |
|  | [WRITE-FUNCTION](./WRITE-FUNCTION) | Writes data into file |
|  | [REWRITE-FUNCTION](./REWRITE-FUNCTION) | Rewrites data into file |
|  | [DELETE-FUNCTION](./DELETE-FUNCTION) | Deletes data from file |
|  | [UNLOCK-FUNCTION](./UNLOCK-FUNCTION) | Unlocks all locked records in a file |
|  | [REMOVE-FUNCTION](./REMOVE-FUNCTION) | Removes file from disc |
|  | [FLUSH-FUNCTION](./FLUSH-FUNCTION) | Flushes all data to disc |
|  | [START-TRANSACTION-FUNCTION](./START-TRANSACTION-FUNCTION) | Begins a transaction |
|  | [COMMIT-TRANSACTION-FUNCTION](./COMMIT-TRANSACTION-FUNCTION) | Commits a transaction |
|  | [ROLLBACK-FUNCTION](./ROLLBACK-FUNCTION) | Rollbacks a transaction |
|  | [RECOVER-FUNCTION](./RECOVER-FUNCTION) | Rolls forward a transaction |
|  | [IN-TRANSACTION-FUNCTION](./IN-TRANSACTION-FUNCTION) | Tests if transaction is finished |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* contains useful information such as file handles and record sizes or zero if an error occurs. Check the external variables F_ERRNO, F_SYSERR and F_ERRMSG for additional information on the error.

Possible F_ERRNO (listed below) values are available as 88 level items in the [isfilesys.def](../../Copybooks/isfilesys.def) copybook.

| Value | Meaning |
| --- | --- |
| 0 | Operation successful. |
| 1 | System error. |
| 2 | Parameter error. |
| 3 | Too many files opened. |
| 4 | Mode clash. |
| 5 | Record locked. |
| 6 | File broken. |
| 7 | Duplicate record. |
| 8 | Record not found or end of file. |
| 9 | Undefined record. |
| 10 | Disk full. |
| 11 | File locked. |
| 12 | Record size changed. |
| 13 | Mismatch between the physical file and its description in the program. |
| 14 | Out of memory. |
| 15 | Missing file. |
| 16 | Permission denied. |
| 17 | Unsupported operation. |
| 18 | No more locks available. |
| 19 | Interface error. |
| 20 | License error. |
| 21 | Unknown error. |

F_SYSERR and F_ERRMSG are set to different values depending on the current file handler.

### Examples:

**Example -** Create an empty file with 1 key and 22 characters records length

```cobol
      *> 01 record.
      *>  03 rec-key    pic 99.  *> This is the record key
      *>  03 rec-data   pic x(20).

working-storage section.
copy "isgui.def".
copy "isfilesys.def".
77  f                       handle .
77  file-io                 pic x(128).
77  key-io                  pic x(10).

procedure division.
create-file.
   move "iss-file-io" to file-io
   move zero to block-multiple pre-allocation-amount
                extension-amount compression-factor encrypted-flag
   move 22 to max-rec-size
   move 22 to min-rec-size
   move 1 to num-keys
   move "1,0,2,0" to key-io
   inspect file-io replacing trailing spaces by low-value
   inspect key-io  replacing trailing spaces by low-value
   inspect logical-info  replacing trailing spaces by low-value
   set make-function to true
   call "i$io" using io-function, file-io, 0, physical-info,
                                          logical-info, key-io, 0

   if f_errno not = 0
      display message "I$IO Error: make : " f_errno
   end-if
   goback.
```

**Example -** Open a file on I-O mode, get the record count, then close it

```cobol
working-storage section.
copy "isgui.def".
copy "isfilesys.def".
77  f                       handle .
77  file-io                 pic x(128).
77  key-io                  pic x(10).

procedure division.
...
open-io.
   move "iss-file-io" to file-io
   move 22 to max-rec-size
   move 22 to min-rec-size
   move  2 to num-keys
   set open-function to true
   move fio to open-mode
   call "i$io" using io-function, file-io,
                             open-mode, logical-info

   if return-code = 0
      display message "I$IO Error: open : " F_ERRNO
   else
      move return-code to f
   end-if.
get-record-count.
   set info-function to true
   set get-record-count to true
   call "I$IO" using io-function, f, info-mode,
                     record-count-info
close-file.
   set close-function to true
   call "i$io" using io-function  f
        giving returnCode
   if returnCode = 0
      display message "I$IO Error: close : " F_ERRNO
   end-if.
```
