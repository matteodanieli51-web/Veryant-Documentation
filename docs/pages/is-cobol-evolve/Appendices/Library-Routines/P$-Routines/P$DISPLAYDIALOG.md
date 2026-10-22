### P$DISPLAYDIALOG

The P$DISPLAYDIALOG library routine invokes the standard *Choose Printer* dialog box. After choosing a printer with this dialog box, the next open of a dynamic printer device will use the selected printer.

#### Syntax

```cobol
 CALL "P$DISPLAYDIALOG" GIVING dialogReturn
```

#### Return code

|  |  |  |
| --- | --- | --- |
| *dialogReturn* | PIC 9(n) | Receives the exit status: zero if the user selects a printer and non-zero if the user cancels the operation. |
