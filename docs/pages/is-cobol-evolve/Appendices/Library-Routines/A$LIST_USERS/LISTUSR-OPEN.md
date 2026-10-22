### LISTUSR-OPEN

The LISTUSR-OPEN function opens the list of connected users.

#### Syntax:

```cobol
 CALL "A$LIST_USERS" USING LISTUSR-OPEN
                    GIVING listHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTUSR-OPEN | Constant |  |

#### Return code:

*listHandle* must be a USAGE HANDLE data item. It receives the handle of the list of users and will be used with the LISTUSR-NEXT and LISTUSR-CLOSE functions. It receives 0 if the routine is called outside of the isCOBOL Application Server environment.
