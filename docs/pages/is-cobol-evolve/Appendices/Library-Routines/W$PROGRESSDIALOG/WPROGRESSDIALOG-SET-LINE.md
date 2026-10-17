### WPROGRESSDIALOG-SET-LINE

The WPROGRESSDIALOG-SET-LINE function sets the text lines that are displayed in the progress dialog.

#### Syntax:

```cobol
 CALL "W$PROGRESSDIALOG" USING WPROGRESSDIALOG-SET-LINE
                               pDialogHandle
                               string
                               lineNum
                               compactPath
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPROGRESSDIALOG-SET-LINE | Constant |  |
| *pDialogHandle* | HANDLE | Handle returned by [WPROGRESSDIALOG-CREATE](./WPROGRESSDIALOG-CREATE). |
| *string* | PIC X(n) | Specifies the text to display. |
| *lineNum* | PIC 9(1) | Specifies the line number on which the text is to be displayed. This can be either 1, 2, or 3. If WPROGRESSDIALOG-AUTOTIME was specified in the flags parameter when the progress dialog was created, then only lines 1 and 2 can be used. The estimated time will be displayed on line 3. |
| *compactPath* | PIC 9(1) | It activates (if set to "1") or deactivates (if set to "0") path string compaction. |
