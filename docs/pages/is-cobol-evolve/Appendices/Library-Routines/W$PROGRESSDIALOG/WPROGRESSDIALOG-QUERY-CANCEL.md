### WPROGRESSDIALOG-QUERY-CANCEL

The WPROGRESSDIALOG-QUERY-CANCEL function checks whether the user has pressed the Cancel button. You should periodically use this function to poll the progress dialog box object to determine whether the operation has been canceled.

#### Syntax:

```cobol
 CALL "W$PROGRESSDIALOG" USING WPROGRESSDIALOG-QUERY-CANCEL
                               pDialogHandle
                        GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPROGRESSDIALOG-QUERY-CANCEL | Constant |  |
| *pDialogHandle* | HANDLE | Handle returned by [WPROGRESSDIALOG-CREATE](./WPROGRESSDIALOG-CREATE). |

#### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | The Cancel button was not clicked. |
| 1 | The Cancel button was clicked. |
