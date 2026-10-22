### P$SETDIALOG

The P$SETDIALOG library routine initializes fields for the *Choose Printer* dialog box.

#### Syntax 1

```cobol
 CALL "P$SETDIALOG" USING printDialog
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *printDialog* | Group Item | Group Item defined as follows: |
|  |  | **Note -** only the following fields are supported:<br>- PD-Collate-Flag-Value<br>- PD-Copies<br>- DM-DeviceName<br>- DM-Fields<br>- DM-OrientationValue<br>- DM-PaperSizeValue<br>- DM-Copies<br>- DM-PaperSourceValue<br>- DM-ColorValue |

#### Syntax 2

```cobol
 CALL "P$SETDIALOG" USING settingName1, settingValue1
                         [settingName2, settingValue2
                          ...
                         [settingNameN, settingValueN]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *settingName1*<br>*settingName2*<br>*...*<br>*settingNameN* | PIC X(n) | Specifies the setting name.<br>Possible values are:<br>“Collate Flag”<br>“Print Dialog Copies”<br>“Device Name”<br>“Orientation”<br>“Paper Size”<br>“Device Mode Copies”<br>“Default Source”<br>“Print Quality”<br>“Color” |
| *settingValue1*<br>*settingValue2*<br>*...*<br>*settingValueN* | PIC X(n) or PIC 9(n) depending on the value type | Specifies the setting value.<br>Possible values are:<br>Print Dialog Copies -> any numeric value<br>Device Name -> any alphanumeric value<br>Orientation -> 1=Portrait, 2=Landscape<br>Paper Size -> see *winprint-curr-papersize* constants in [isprint.def](../../Copybooks/isprint.def)<br>Device Mode Copies -> any numeric value<br>Default Source -> see *winprint-curr-tray* constants in [isprint.def](../../Copybooks/isprint.def)<br>Print Quality” -> from -1 (highest) to -4 (lowest) or 0 for default<br>Color -> 1=Monochrome, 2=Color |
