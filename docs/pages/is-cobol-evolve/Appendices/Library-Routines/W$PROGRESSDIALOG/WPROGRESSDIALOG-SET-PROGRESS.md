### WPROGRESSDIALOG-SET-PROGRESS

The WPROGRESSDIALOG-SET-PROGRESS function updates the progress dialog box with the current state of the work being monitored.

#### Syntax:

```cobol
 CALL "W$PROGRESSDIALOG" USING WPROGRESSDIALOG-SET-PROGRESS
                               pDialogHandle
                               completed
                               total
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPROGRESSDIALOG-SET-PROGRESS | Constant |  |
| *pDialogHandle* | HANDLE | Handle returned by [WPROGRESSDIALOG-CREATE](./WPROGRESSDIALOG-CREATE). |
| *completed* | PIC 9(n) | Specifies what proportion of the work has been completed so far. |
| *total* | PIC 9(n) | Specifies  what value the *completed* parameter will have when the work is complete. |
