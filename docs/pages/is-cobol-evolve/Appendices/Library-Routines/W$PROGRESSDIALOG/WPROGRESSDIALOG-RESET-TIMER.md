### WPROGRESSDIALOG-RESET-TIMER

The WPROGRESSDIALOG-RESET-TIMER function resets the progress dialog box timer to zero.

#### Syntax:

```cobol
 CALL "W$PROGRESSDIALOG" USING WPROGRESSDIALOG-RESET-TIMER
                               pDialogHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPROGRESSDIALOG-RESET-TIMER | Constant |  |
| *pDialogHandle* | HANDLE | Handle returned by [WPROGRESSDIALOG-CREATE](./WPROGRESSDIALOG-CREATE). |
