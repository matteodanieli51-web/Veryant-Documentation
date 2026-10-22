### OPENSAVE-NEXT

The OPENSAVE-NEXT function returns the next item selected by the user when multiple selection was allowed. This function should be called multiple times after [OPENSAVE-OPEN-BOX-MULTI](./OPENSAVE-OPEN-BOX-MULTI) and [OPENSAVE-BROWSE-FOLDER-MULTI](./OPENSAVE-BROWSE-FOLDER-MULTI) in order to retrieve the list of selected items. When no more items are available, -1 is returned as exit status.

#### Syntax:

```cobol
 CALL "C$OPENSAVEBOX" USING OPENSAVE-NEXT
                            OPENSAVE-DATA
                     GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| OPENSAVE-NEXT | Constant |  |
| *OPENSAVE-DATA* | Group Item | When the OPENSAVE-NEXT function returns successfully, this structure receives information about the user's selection. This group item, defined in isopensave.def, has the following structure:<br>*opnsav-filename*<br>Specifies the default filename. When the OPENSAVE-BROWSE-FOLDER function returns successfully, it receives the drive designator and path of the first selected directory.<br>*opnsav-flags*<br>Not used<br>*opnsav-default-ext*<br>Not used.<br>*opnsav-title*<br>String to be placed in the title bar of the dialog box. If this member is spaces, the system uses the default title.<br>*opnsav-filters*<br>Not used.<br>*opnsav-default-filter*<br>Not used.<br>*opnsav-default-dir*<br>Specifies the initial directory.<br>*opnsav-basename*<br>Not used. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | The next item has been returned. |
| -1 | No more items available. |
