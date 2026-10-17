### WPROGRESSDIALOG-CREATE

The WPROGRESSDIALOG-CREATE function creates and starts the progress dialog.

#### Syntax:

```cobol
 CALL "W$PROGRESSDIALOG" USING WPROGRESSDIALOG-CREATE
                               title
                               cancelMessage
                               flags
                              [bitmapHandle]
                        GIVING pDialogHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPROGRESSDIALOG-CREATE | Constant |  |
| *title* | PIC X(n) | Specifies the text that will appear in the title bar of the progress dialog. |
| *cancelMessage* | PIC X(n) | Specifies the text that is shown on line 3 (below the progress bar) when the user clicks the Cancel button. |
| *flags* | PIC 9(n) | Specifies flags that determine the operation of the progress dialog. This can be a combination of the following values, defined in isgui.def:<br>WPROGRESSDIALOG-NORMAL (value 0): Normal progress dialog behavior.<br>WPROGRESSDIALOG-MODAL (value 1): The progress dialog box will be modal to the current window. By default, a progress dialog box is modeless.<br>WPROGRESSDIALOG-AUTOTIME (value 2): Automatically estimate the remaining time and display the estimate on line 3. If this flag is set, WPROGRESSDIALOG-SET-LINE can be used only to display text on lines 1 and 2.<br>WPROGRESSDIALOG-NOTIME (value 4): Do not show the "time remaining" text.<br>WPROGRESSDIALOG-NOPROGRESSBAR (value 16): Display a progress bar in indeterminate state. |
| *bitmapHandle* | PIC S9(9) COMP-4 | Optional parameter. It specifies an icon to be shown top-right of the dialog. |

#### Return code:

*pDialogHandle* must be a USAGE HANDLE data item. It receives the handle of the list of users and will be used with the other W$PROGRESSDIALOG functions.
