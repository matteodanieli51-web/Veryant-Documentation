### OPENSAVE-BROWSE-FOLDER

The OPENSAVE-BROWSE-FOLDER function opens an "Open" dialog box, showing directories only.

#### Syntax:

```cobol
 CALL "C$OPENSAVEBOX" USING OPENSAVE-BROWSE-FOLDER
                            OPENSAVE-DATA
                     GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| OPENSAVE-BROWSE-FOLDER | Constant |  |
| *OPENSAVE-DATA* | Group Item | It is a structure that contains information used to initialize the dialog box. When the OPENSAVE-BROWSE-FOLDER function returns successfully, this structure receives information about the user's selection. This group item, defined in isopensave.def, has the following structure:<br>*opnsav-filename*<br>Specifies the default filename. When the OPENSAVE-BROWSE-FOLDER function returns successfully, it receives the drive designator and path of the selected directory.<br>*opnsav-flags*<br>The following constants, defined in isopensave.def, can be combined to set this field:<br>*-opensave-browse-dontgobelowdomain*: network folders below the domain level in the dialog box are not included.<br>*-opensave-browse-browseincludefiles*: the browse dialog box displays files as well as folders.<br>*opnsav-default-ext*<br>Not used.<br>*opnsav-title*<br>String to be placed in the title bar of the dialog box. If this member is spaces, the system uses the default title.<br>*opnsav-filters*<br>Not used.<br>*opnsav-default-filter*<br>Not used.<br>*opnsav-default-dir*<br>Not used.<br>*opnsav-basename*<br>Not used. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. Directory has been chosen. |
| -1 | The user has pressed the "Cancel" button. opensaveData contents are not updated. |
