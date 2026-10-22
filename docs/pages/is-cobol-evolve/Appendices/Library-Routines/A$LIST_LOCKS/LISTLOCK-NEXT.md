### LISTLOCK-NEXT

The LISTLOCK-NEXT function retrieves the next item in the list.

#### Syntax:

```cobol
 CALL "A$LIST_LOCKS" USING LISTLOCK-NEXT
                           listHandle
                           fileName
                           threadID
                           openMode
                           lockMode
                           keyVal
                           keyLen
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTLOCK-NEXT | Constant |  |
| *listHandle* | USAGE HANDLE | Specifies the handle of a list, returned by the LISTLOCK-OPEN function |
| *fileName* | PIC X(n) | Receives the name of the file where the lock is. |
| *threadID* | PIC 9(n) | Receives the thread ID of the Client that is locking the record. To have additional information you can call the [A$GET_USER](../A$GET_USER) routine passing this ID to it |
| *openMode* | PIC 9 | Receives the way by which the file was open. Possible values are:<br>**1...** Input<br>**2...** Output<br>**3...** I-O<br>**6...** Extend<br>**8...** Transaction |
| *lockMode* | PIC 9(4) | Receives the lock mode applied to the file. The value is the sum between one or more of the following values:<br>**0...** None<br>**1...** Exclusive<br>**2...** Allowing No Others<br>**3...** Allowing Readers<br>**4...** Allowing Writers<br>**5...** Allowing Updaters<br>**6...** Allowing All<br>**128...** Automatic<br>**256...** Multiple Records<br>**512...** Mass Update<br>**1024...** Bulk Addition<br>**2048...** Transaction |
| *keyVal* | PIC X(n) | Receives the value of the primary key of the locked record. This field is intialized to "" when the lock is on the whole file. |
| *keyLen* | PIC 9(n) | Receives the length in bytes of the primary key of the locked record. A length of zero means that the lock is on the whole file. |

#### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | No more items available. |
| >0 | Information returned correctly. |
