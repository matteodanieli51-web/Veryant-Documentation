### LISTUSR-CLOSE

The LISTUSR-CLOSE function closes the list of connected users.

#### Syntax:

```cobol
 CALL "A$LIST_USERS" USING  LISTUSR-CLOSE, listHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTUSR-CLOSE | Constant |  |
| *listHandle* | USAGE HANDLE | Specifies the handle of a list returned by the LISTUSR-OPEN function |
