### OPENSAVE-BROWSE-FOLDER-MULTI

The OPENSAVE-BROWSE-FOLDER-MULTI function opens an "Open" dialog box, showing directories only and allows the user to select multiple items by holding either CTRL or SHIFT while he selects the items.

#### Syntax:

```cobol
 CALL "C$OPENSAVEBOX" USING OPENSAVE-BROWSE-FOLDER-MULTI
                            OPENSAVE-DATA
                     GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| OPENSAVE-BROWSE-FOLDER-MULTI | Constant |  |
| *OPENSAVE-DATA* | Group Item | It is a structure that contains information used to initialize the dialog box. When the OPENSAVE-BROWSE-FOLDER-MULTI function returns successfully, this structure receives information about the user's selection. This group item, defined in isopensave.def, has the following structure:<br>*opnsav-filename*<br>Specifies the default filename. When the OPENSAVE-BROWSE-FOLDER-MULTI function returns successfully, it receives the drive designator and path of the first selected directory.<br>*opnsav-flags*<br>Not used<br>*opnsav-default-ext*<br>Not used.<br>*opnsav-title*<br>String to be placed in the title bar of the dialog box. If this member is spaces, the system uses the default title.<br>*opnsav-filters*<br>Not used.<br>*opnsav-default-filter*<br>Not used.<br>*opnsav-default-dir*<br>Specifies the initial directory.<br>*opnsav-basename*<br>Not used. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. Directory has been chosen. |
| -1 | The user has pressed the "Cancel" button. opensaveData contents are not updated. |
