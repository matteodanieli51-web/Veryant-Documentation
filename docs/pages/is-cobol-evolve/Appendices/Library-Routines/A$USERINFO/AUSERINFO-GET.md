### AUSERINFO-GET

The AUSERINFO-GET function inquires custom information for the current client or for another client running in the same Application Server depending on the *threadID* parameter.

#### Syntax:

```cobol
 CALL "A$USERINFO" USING AUSERINFO-GET
                         clientData
                        [threadID]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| AUSERINFO-GET | Constant |  |
| *clientData* | PIC X(n) | receives the custom information. |
| *threadID* | PIC 9(n) | specifies the thread ID of the client you want to inquire. If omitted, then the current client is inquired. |

#### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| -1 | Invalid parameters |
| -2 | Invalid thread ID |
