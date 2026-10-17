## S$IO

The S$IO routine provides a low-level interface to sequential files allowing them to be managed without knowing their FD.

The configuration properties [iscobol.file.linesequential](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.linesequential.FileName](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) specify which file handler is used for line sequential files.

The configuration properties [iscobol.file.sequential](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.sequential.FileName](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) specify which file handler is used for binary sequential files.

The following configuration properties are ignored: [iscobol.file.case](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties), [iscobol.file.prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties), [iscobol.file.sequential_file_prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.file.binary_file_prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

**Note -** due to the use of external data items, this routine is not thread safe.

### Syntax:

```cobol
 CALL "S$IO" USING opCode
                   parameters
            GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Specifies the file handling function to be performed.<br>Valid values, defined in [isfilesys.def](../../Copybooks/isfilesys.def) are: |  |
|  | [S-OPEN-FUNCTION](./S-OPEN-FUNCTION) | Opens an existing file |
|  | [S-CLOSE-FUNCTION](./S-CLOSE-FUNCTION) | Closes an opened file |
|  | [S-MAKE-FUNCTION](./S-MAKE-FUNCTION) | Creates an empty file |
|  | [S-READ-FUNCTION](./S-READ-FUNCTION) | Reads a record from a file |
|  | [S-WRITE-FUNCTION](./S-WRITE-FUNCTION) | Writes data into file |
|  | [S-REWRITE-FUNCTION](./S-REWRITE-FUNCTION) | Rewrites data into file |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* contains useful information such as file handles and record sizes or zero if an error occurs. Check the external variable F_ERRNO for additional information on the error.

### Examples:

Example - create a sequential file, write some records and then close it

```cobol
       working-storage section.
       ...
       copy "isfilesys.def".
       77  f                       handle .
       77  file-io                 pic x(128).


       01  sio-lparms.
           03 max-rec-sz pic 9.
           03 filler     pic x value ",".
           03 file-type  signed-short.
           03 filler     pic x value ",".
           03 block-sz   pic 9 value 0.

       01  rec-buffer.
           03 rec-val    pic 9(5).
           03 filler     pic x value x"00".
       ...
       procedure division.
       ...
           set s-make-function to true
           call "s$io" using sio-function,
                             file-io,
                             sio-lparms
           if return-code = 0
              display message F_ERRNO
                      icon    mb-error-icon
                      title   "S$IO Error: make"
           end-if

      *opening
           display label line 4 title "Opening file..."
           set s-open-function to true
           move foutput to open-mode
           call "s$io" using sio-function,
                             file-io,
                             open-mode,
                             max-rec-sz,
                             seq-type,
                             0,
                             0

           if return-code > 0
              move return-code to f
           else
              display message F_ERRNO
                      icon    mb-error-icon
                      title   "S$IO Error: open"
           end-if

      *record writing
           move 0 to rec-val.
           display label line 6 title "Writing into file..."
           set s-write-function to true
           perform 5 times
              add 1 to rec-val
              call "s$io" using sio-function,
                                f,
                                rec-buffer,
                                0,
                                0
              if return-code = 0
                 display message F_ERRNO
                         icon    mb-error-icon
                         title   "S$IO Error: write"
              end-if
           end-perform

      *close file
           display label line 8 title "Closing file..."
           set s-close-function to true.
           call "s$io" using sio-function,
                             f.

           if return-code > 0
              move return-code to f
           else
              display message F_ERRNO
                      icon    mb-error-icon
                      title   "S$IO Error: close"
           end-if
...
```
