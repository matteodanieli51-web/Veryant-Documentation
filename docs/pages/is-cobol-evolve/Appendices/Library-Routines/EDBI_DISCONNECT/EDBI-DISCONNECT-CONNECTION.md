### EDBI-DISCONNECT-CONNECTION

The EDBI-DISCONNECT-CONNECTION function allows you to disconnect from a named connection.

#### Syntax:

```cobol
 CALL "EDBI_DISCONNECT" USING EDBI-DISCONNECT-CONNECTION
                              connectionName
                       GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| EDBI-DISCONNECT-CONNECTION | Constant |  |
| *connectionName* | PIC X(n) | Specifies the name of the connection to close.<br>Please consult DatabaseBridge documentation, chapter [Working with multiple connections](../../../../is-cobol-db-bridge/Working-with-multiple-connections), for details about connection names. |

#### Return code:

*returnCode* is zero if the disconnection was successful, 1 if the disconnection failed.
