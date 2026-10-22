## C$OPENSAVEBOX

The C$OPENSAVEBOX library routine provides a number of functions to allow the user to choose a file to be opened, a file to be saved, or a directory name. In thin client environment, this routine allows the user to choose a directory or file on the client machine.

On Windows the routine invokes the IFileDialog interface via the jna libraries (installed along with isCOBOL). Calling the IFileDialog interface allows users to take advantage of system dialogs and all their features.

On Linux/Unix platforms, WebClient or when jna is not available in the Classpath, the routine uses the JFileChooser class of Java Swing. JFileChooser dialogs have some limitations if compared with the Windows system dialogs, for example they don’t allow you to cut, copy, paste and delete files.

### Syntax:

```cobol
 CALL "C$OPENSAVEBOX" USING opCode
                            parameters
                     GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [isopensave.def](../../Copybooks/isopensave.def), are: |  |
|  | [OPENSAVE-SUPPORTED](./OPENSAVE-SUPPORTED) | Check if the host system supports the C$OPENSAVEBOX library routine. |
|  | [OPENSAVE-OPEN-BOX](./OPENSAVE-OPEN-BOX) | Open an "Open" dialog box. |
|  | [OPENSAVE-SAVE-BOX](./OPENSAVE-SAVE-BOX) | Open a "Save as " dialog box. |
|  | [OPENSAVE-BROWSE-FOLDER](./OPENSAVE-BROWSE-FOLDER) | Open an "Open" dialog box showing directories only. |
|  | [OPENSAVE-OPEN-BOX-MULTI](./OPENSAVE-OPEN-BOX-MULTI) | Open an "Open" dialog box allowing to select multiple items. |
|  | [OPENSAVE-BROWSE-FOLDER-MULTI](./OPENSAVE-BROWSE-FOLDER-MULTI) | Open an "Open" dialog box showing directories only and allowing to select multiple items. |
|  | [OPENSAVE-NEXT](./OPENSAVE-NEXT) | Returns the next item of a multiple selection performed through [OPENSAVE-OPEN-BOX-MULTI](./OPENSAVE-OPEN-BOX-MULTI) or [OPENSAVE-BROWSE-FOLDER-MULTI](./OPENSAVE-BROWSE-FOLDER-MULTI). |
|  | [OPENSAVE-SAVE-BOX-CHECKED](./OPENSAVE-SAVE-BOX-CHECKED) | Open a "Save as " dialog box that automatically performs a check on file existence. |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples

**Example -** The following program opens a dialog box allowing the user to select multiple files and then shows the list of selected files through a sequence of message boxes.

```cobol
       PROGRAM-ID. multisel.

       WORKING-STORAGE SECTION.
       copy "isopensave.def".

       PROCEDURE DIVISION.
       MAIN.
           initialize opensave-data.
           call "C$OPENSAVEBOX" using opensave-open-box-multi
                                      opensave-data.
           if return-code = 1
              perform show-selected-file
              perform until exit
                 initialize opensave-data
                 call "C$OPENSAVEBOX" using opensave-next
                                            opensave-data
                 if return-code = -1
                    exit perform
                 else
                    perform show-selected-file
                 end-if
              end-perform
           end-if.
           goback.

       show-selected-file.
           display message opnsav-filename
                   title   "The user has selected".
```

**Example -** Create an Open File box where only txt files can be selected

```cobol
       WORKING-STORAGE SECTION.
       copy "isopensave.def".

       PROCEDURE DIVISION.
       MAIN.
           initialize opensave-data.
           move "Text files (*.txt)|*.txt” to opnsav-filters.
           call "C$OPENSAVEBOX" using opensave-open-box
                                      opensave-data.
```

**Example -** Let the user find a directory where to save a file and type the filename to be saved or select an existing one. If user selects existing one the routine will ask if user wants to overwrite it.

```cobol
*> copy "isopensave.def" on working-storage

initialize opensave-data
move "Save to file" to opnsav-title

call "c$opensavebox" using opensave-save-box-checked,
                           opensave-data
                    giving opensave-status

if opensave-status > 0
   display message "Saving to file : " opnsav-filename
else
   display message "Operation cancelled"
end-if
```
