### P$GETDIALOG

The P$GETDIALOG library routine retrieves fields from the *Choose Printer* dialog box.

#### Syntax 1

```cobol
 CALL "P$GETDIALOG" USING printDialog
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *printDialog* | Group Item | Group Item defined as follows: |
|  |  | **Note -** only the following fields are supported:<br>- PD-CollateFlagValue<br>- PD-Copies<br>- DM-DeviceName<br>- DM-Fields<br>- DM-OrientationValue<br>- DM-PaperSizeValue<br>- DM-Copies<br>- DM-PaperSourceValue<br>- DM-ColorValue |

#### Syntax 2

```cobol
 CALL "P$GETDIALOG" USING settingName1, settingValue1
                         [settingName2, settingValue2]
                         ...
                         [settingNameN, settingValueN]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *settingName1*<br>*settingName2*<br>*...*<br>*settingNameN* | PIC X(n) | Specifies the setting name.<br>Possible values are:<br>“Collate Flag”<br>“Print Dialog Copies”<br>“Device Name”<br>“Orientation”<br>“Paper Size”<br>“Device Mode Copies”<br>“Default Source”<br>“Print Quality”<br>“Color” |
| *settingValue1*<br>*settingValue2*<br>*...*<br>*settingValueN* | PIC X(n) or PIC 9(n) depending on the value type | Receives the setting value. |
