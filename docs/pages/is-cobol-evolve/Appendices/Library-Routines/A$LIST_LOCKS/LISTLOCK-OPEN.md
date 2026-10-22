### LISTLOCK-OPEN

The LISTLOCK-OPEN function opens the list of active locks.

#### Syntax:

```cobol
 CALL "A$LIST_LOCKS" USING LISTLOCK-OPEN
                           NULL
                           fileName
                           threadID
                    GIVING listHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTLOCK-OPEN | Constant |  |
| NULL | Constant value | This parameter must be Null |
| *fileName* | PIC X(n) | Name of the file you want to inquire. If omitted or set to spaces, then all the files are inquired. |
| *threadID* | PIC 9(n) | Thread ID of the client you want to inquire. If omitted or set to 0, then all clients are inquired. |

#### Return code:

*listHandle* must be a USAGE HANDLE data item. It receives the handle of the list of locks and will be used with the [LISTLOCK-NEXT](./LISTLOCK-NEXT) and [LISTLOCK-CLOSE](./LISTLOCK-CLOSE) functions.

A value of 0 means that the function failed. Possible failure causes are:

- the configuration property iscobol.file.lock_manager was not set
- there are no active locks at the moment
- the program is not running in an Application Server environment
