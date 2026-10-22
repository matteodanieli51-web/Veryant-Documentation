### OPENSAVE-OPEN-BOX

The OPENSAVE-OPEN-BOX function opens an "Open" dialog box.

#### Syntax:

```cobol
 CALL "C$OPENSAVEBOX" USING OPENSAVE-OPEN-BOX
                            OPENSAVE-DATA
                     GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| OPENSAVE-OPEN-BOX | Constant |  |
| *OPENSAVE-DATA* | Group Item | It is a structure that contains information used to initialize the dialog box. When the OPENSAVE-OPEN-BOX function returns successfully, this structure contains information about the user's selection. This group item, defined in isopensave.def, has the following structure:<br>*opnsav-filename*<br>Specifies the default filename.<br>If a pathname is provided, the behavior changes between the JFileChooser class and the Windows IFileDialog interface.<br>With JFileChooser, the path is discarded and the basename is shown in the ‘File name’ field.<br>With the IFileDialog interface the dialog changes to the directory specified by the path and the basename is shown in the ‘File name’ field.<br>When the OPENSAVE-OPEN-BOX function returns successfully, opnsav-filename receives the drive designator, path, file name, and extension of the selected file.<br>*opnsav-flags*<br>The following constants, defined in isopensave.def, can be combined to set this field:<br>*-opensave-show-preview-flag*:  the file chooser dialog shows image files preview on the right. This flag has effect only with the JFileChooser class. With the Windows IFileDialog interface previews are shown by changing the view to small, medium or large icons in the dialog.<br>*-opensave-pathmustexist*: the user can type only valid paths and file names.<br>*-opensave-filemustexist*:  the user can type only names of existing files.<br>*-opensave-createprompt*: if the user specifies a file that does not exist, this flag causes the dialog box to prompt the user for permission to create the file.<br>*-opensave-noreadonlyreturn:* the returned file must not be write-protected.<br>*opnsav-default-ext*<br>This item holds the default file name extension. The extension is the string of characters that appear after the "." in the file name. The value of OPNSAV-DEFAULT-EXT is added to the file name typed by the user, if the user does not type an extension. The default extension should not include the period ".". Set this item to spaces to avoid having a default extension.<br>*opnsav-title*<br>String to be placed in the title bar of the dialog box. If this member is spaces, the system uses the default title.<br>*opnsav-filters*<br>The value of OPNSAV-FILTERS describes the set of filters that the dialog box will use to restrict the set of files shown to the user. |
|  |  | Filters make it easier for a user to navigate through a large directory by limiting the files shown at once.<br>Each filter consists of a pair of descriptors. These descriptors are separated by a vertical bar character ("\|").<br>A filter can include multiple file extensions separated by comma.<br>Here is a sample OPNSAV-FILTERS setting that contains two filters:<br>"Image Files(\*.BMP;\*.JPG;\*.GIF)\|\*.BMP;\*.JPG;\*.GIF\|All files (\*.\*)\|\*.\*"<br>*opnsav-default-filter*<br>This item is used in conjunction with OPNSAV-FILTERS. The value of OPNSAV-DEFAULT-FILTER determines which of the given filters to use as the initial filter. A value of "1" selects the first filter pair, "2" selects the second pair, and so on. A value of zero also selects the first pair. This setting is not used if no filters are defined.<br>*opnsav-default-dir*<br>The meaning of this field changes between the JFileChooser class and the Windows IFileDialog interface.<br>With JFileChooser this field always specifies the initial directory.<br>With the IFileDialog interface the field is treated as follows:<br>*opnsav-basename*<br>When the routine returns, this item contains the base file name of the file chosen by the user. This differs from the value of OPNSAV-FILENAME in that all directory information is removed, leaving only the file name. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. File has been chosen. |
| -1 | The user has pressed the "Cancel" button. opensaveData contents are not updated. |
