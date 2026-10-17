### EDBI-DISCONNECT-ALL

The EDBI-DISCONNECT-ALL function allows you to disconnect from all the active connections open by isCOBOL DatabaseBridge.

#### Syntax:

```cobol
 CALL "EDBI_DISCONNECT" USING EDBI-DISCONNECT-ALL
                       GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| EDBI-DISCONNECT-ALL | Constant |  |

#### Return code:

*returnCode* is zero if the disconnection was successful, 1 if the disconnection failed.
