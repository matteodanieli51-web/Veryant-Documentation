### GET-BLOB-FROM-FILE

The GET-BLOB-FROM-FILE function reads a binary file on the disc and generates a BLOB providing a handle to it. The handle can be used as host variable in INSERT and UPDATE ESQL statements.

#### Syntax:

```cobol
 CALL "ESQL$BLOB" USING GET-BLOB-FROM-FILE
                        blobHandle
                        fileName
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| GET-BLOB-FROM-FILE | Constant |  |
| blobHandle | USAGE HANDLE | It's the handle in which the reference to the BLOB will be stored. |
| fileName | PIC X(n) | It's the name of the file that has to be stored as BLOB data in the database table. |

#### Return code:

*returnCode* is set to the size in bytes of the file if the function succeeds, otherwise it's set to zero.
