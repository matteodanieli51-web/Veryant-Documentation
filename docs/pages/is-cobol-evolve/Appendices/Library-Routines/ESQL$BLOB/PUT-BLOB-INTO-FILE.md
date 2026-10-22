### PUT-BLOB-INTO-FILE

The PUT-BLOB-INTO-FILE function writes the binary content of a BLOB into a file on disc.

#### Syntax:

```cobol
 CALL "ESQL$BLOB" USING PUT-BLOB-INTO-FILE
                        blobHandle
                        fileName
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| PUT-BLOB-INTO-FILE | Constant |  |
| *blobHandle* | USAGE HANDLE | It's the handle that identifies the BLOB to be written. |
| *fileName* | PIC X(n) | It's the name of the disc file that will host the BLOB data. |

#### Return code:

*returnCode* is set to the size in bytes of the written file if the function succeeds, otherwise it's set to zero.
