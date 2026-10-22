## W$PROGRESSDIALOG

The W$PROGRESSDIALOG library routine provides a general way to show a user how an operation is progressing.

### Syntax

```cobol
 CALL "W$PROGRESSDIALOG" USING opCode,
                               parameters
                        GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [isgui.def](../../Copybooks/isgui.def), are: |  |
|  | [WPROGRESSDIALOG-CREATE](./WPROGRESSDIALOG-CREATE) | Create and start the progress dialog. |
|  | [WPROGRESSDIALOG-DESTROY](./WPROGRESSDIALOG-DESTROY) | Closes the progress dialog box. |
|  | [WPROGRESSDIALOG-SET-PROGRESS](./WPROGRESSDIALOG-SET-PROGRESS) | Updates the progress dialog box. |
|  | [WPROGRESSDIALOG-QUERY-CANCEL](./WPROGRESSDIALOG-QUERY-CANCEL) | Check if the user has pressed the Cancel button. |
|  | [WPROGRESSDIALOG-SET-LINE](./WPROGRESSDIALOG-SET-LINE) | Set the text lines displayed in the progress dialog box. |
|  | [WPROGRESSDIALOG-RESET-TIMER](./WPROGRESSDIALOG-RESET-TIMER) | Reset the progress dialog box timer to zero. |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

The definition and meaning of the *returnCode* depend on the opcode.

### Examples:

**Example -** Show a work in progress dialog during i/o operations.

```cobol
call "w$progressdialog" using wprogressdialog-create
                              "Processing..."
                              "Operation cancelled"
                              wprogressdialog-noprogressbar
                              omitted
                       giving pDialogHandle. |defined as usage handle
                                             |in working-storage
call "w$progressdialog" using wprogressdialog-set-line
                             pdialoghandle
                             "exporting data from files"
                              1, 0.

perform export-data-from-files.
call "w$progressdialog" using wprogressdialog-destroy
                              pDialogHandle.
```
