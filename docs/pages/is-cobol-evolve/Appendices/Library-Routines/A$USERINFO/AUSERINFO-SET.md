### AUSERINFO-SET

The AUSERINFO-SET function sets custom information for the current client or for another client running in the same Application Server depending on the *threadID* parameter. Each time this function is called on the same client, it stores new information overwriting the previous one.

The custom information set by this function is also shown in the Application Server administration panel. See [Format 5](../../../../is-cobol-AS/Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client) in [Usage of isCOBOL Client](../../../../is-cobol-AS/Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client) for details about the Application Server administration panel . The information is shown in a dedicated column at the end of the grid in the Clients view. If you need to store a long text, you may consider to split this text into multiple lines by including line feed characters in it. The administration panel will show only the first line of text followed by suspension points. The entire text will be shown as an hint when the user hovers the mouse over it.

#### Syntax:

```cobol
 CALL "A$USERINFO" USING AUSERINFO-SET
                         clientData
                        [threadID]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| AUSERINFO-SET | Constant |  |
| *clientData* | PIC X(n) | specifies the information to be stored. |
| *threadID* | PIC 9(n) | specifies the thread ID of the client. If omitted, then the current client is used. |

#### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| -1 | Invalid parameters |
| -2 | Invalid thread ID |
