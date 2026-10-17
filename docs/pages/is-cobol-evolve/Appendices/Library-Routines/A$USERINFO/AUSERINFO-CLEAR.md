### AUSERINFO-CLEAR

The AUSERINFO-CLEAR function deletes the custom information for the current current client.

#### Syntax:

```cobol
 CALL "A$USERINFO" USING AUSERINFO-CLEAR
                        [threadID]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| AUSERINFO-CLEAR | Constant |  |
| *threadID* | PIC 9(n) | specifies the thread ID of the client you want to clear. If omitted, then the current client’s info is cleared. |

#### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| -1 | Invalid parameters |
| -2 | Invalid thread ID |
