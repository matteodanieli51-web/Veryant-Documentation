### LISTLOCK-CLOSE

The LISTLOCK-CLOSE function closes the list of active locks.

#### Syntax:

```cobol
 CALL "A$LIST_LOCKS" USING  LISTLOCK-CLOSE
                            listHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTLOCK-CLOSE | Constant |  |
| *listHandle* | USAGE HANDLE | Specifies the handle of a list returned by the LISTLOCK-OPEN function |
