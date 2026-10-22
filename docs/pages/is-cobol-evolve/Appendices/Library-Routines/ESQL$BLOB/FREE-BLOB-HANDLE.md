### FREE-BLOB-HANDLE

The FREE-BLOB-HANDLE function initializes a BLOB handle freeing the memory allocated for the BLOB data.

This function should be used after the BLOB has been stored into the database table and its handle has become useless.

#### Syntax:

```cobol
 CALL "ESQL$BLOB" USING FREE-BLOB-HANDLE
                        blobHandle
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| ESQL-BLOB-FREE | Constant |  |
| *blobHandle* | USAGE HANDLE | It's the handle that identifies the BLOB to be initialized. |

#### Return code:

*returnCode* is set to the size in bytes of the BLOB data if the function succeeds, otherwise it's set to zero.
