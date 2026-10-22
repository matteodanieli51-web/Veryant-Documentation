## R$IO

The R$IO routine provides a low-level interface to relative files allowing them to be managed without knowing their FD.

The configuration properties [iscobol.file.relative](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.relative.FileName](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) specify which file handler is used.

The following configuration properties are ignored: [iscobol.file.case](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties), [iscobol.file.prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.relative_file_prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

**Note -** due to the use of external data items, this routine is not thread safe.

### Syntax:

```cobol
 CALL "R$IO" USING opCode
                   parameters
            GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Specifies the file handling function to be performed.<br>Valid values, defined in [isfilesys.def](../../Copybooks/isfilesys.def) are: |  |
|  | [R-OPEN-FUNCTION](./R-OPEN-FUNCTION) | Opens an existing file |
|  | [R-CLOSE-FUNCTION](./R-CLOSE-FUNCTION) | Closes an opened file |
|  | [R-MAKE-FUNCTION](./R-MAKE-FUNCTION) | Creates an empty file |
|  | [R-READ-FUNCTION](./R-READ-FUNCTION) | Reads a record from a file |
|  | [R-NEXT-FUNCTION](./R-NEXT-FUNCTION) | Reads the next record in a file |
|  | [R-PREVIOUS-FUNCTION](./R-PREVIOUS-FUNCTION) | Reads the previous record in a file |
|  | [R-START-FUNCTION](./R-START-FUNCTION) | Sets the file pointer on a specific record |
|  | [R-WRITE-FUNCTION](./R-WRITE-FUNCTION) | Writes data into file |
|  | [R-REWRITE-FUNCTION](./R-REWRITE-FUNCTION) | Rewrites data into file |
|  | [R-DELETE-FUNCTION](./R-DELETE-FUNCTION) | Deletes data from file |
|  | [R-UNLOCK-FUNCTION](./R-UNLOCK-FUNCTION) | Unlocks all locked records in a file |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* contains useful information such as file handles and record sizes or zero if an error occurs. Check the external variable F_ERRNO for additional information on the error.

### Examples:

**Example -** Create a relative file, write and read records from it

```cobol
 working-storage section.
 copy "isfilesys.def".

 77  f                       handle .
 77  file-io                 pic x(128).
 77  rec-buffer              pic x(22).

 01  rio-lparms.
     03 max-rec-sz           pic 999.
     03 filler               pic x value ",".
     03 min-rec-sz           pic 999.

 77  key-val                 pic 9(5) value 0.

 procedure division.
 main.
 *> creates the file
 *> this is the FD
 *>  01 record.
 *>   03 r-key    pic 99.
 *>   03 r-data   pic x(20).

   display "Creating file..."

   move "c:\tmp\myrelfile" to file-io
   move 22 to max-rec-sz, min-rec-sz
   set r-make-function to true
   call "r$io" using rio-function, file-io, rio-lparms

   if return-code = 0
      display message "R$IO Error: make : " F_ERRNO
   end-if

   *> opening
   display "Opening file..."

   set r-open-function to true
   move fio to open-mode
   move 22  to max-rec-size, min-rec-size
   call "r$io" using rio-function, file-io, open-mode
                     max-rec-size, min-rec-size
   if return-code > 0
      move return-code to f
   else
      display message "R$IO Error: open : " F_ERRNO
   end-if


   *> record writing
   move 0 to key-val.
   display "Writing into file..."
   set r-write-function to true
   perform 3 times
      add 1 to key-val
      move "00xxx" to rec-buffer
      call "r$io" using rio-function, f, rec-buffer,
                                max-rec-size, key-val
      if return-code = 0
         display message "R$IO Error: write : " F_ERRNO
      end-if
   end-perform

   *> start
   display "Getting the first record..."
   set r-start-function to true
   set f-equals       to true
   move 1             to key-val
   call "r$io" using rio-function, f, key-val, start-mode
   if return-code = 0
      display message "R$IO Error: start : " F_ERRNO
   end-if

   *> read next
   display "Reading next record..."
   set r-next-function to true
   call "r$io" using rio-function, f, rec-buffer
   if return-code = 0
      display message "R$IO Error: next : " F_ERRNO
   end-if

   *> close
   display "Closing file..."
   set r-close-function to true
   call "r$io" using rio-function, f

   goback.
```
