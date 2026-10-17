## $WINHELP

The $WINHELP library routine provides a number of functions to manage Windows Help files.

This routine interfaces with the Windows APIs (for hlp files) and hh.exe (for chm files) and therefore, it is not supported on Operating Systems other than Windows.

Microsoft stopped including the 32-bit Help file viewer in Windows releases beginning with Windows Vista and Windows Server 2008. To support customers who still use legacy .hlp files, the Microsoft Download Center provides Help file viewer downloads for Windows Vista, Windows 7, Windows Server 2008, and Windows Server 2008 R2.

### Syntax:

```cobol
 CALL "$WINHELP" USING helpFile
                       opCode
                       parameters
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *helpFile* | Name of the help file |  |
| *opCode* | Function to be executed. Valid values, defined in [iswinhelp.def](../../Copybooks/iswinhelp.def), are: |  |
|  | [HELP-CONTENTS](./HELP-CONTENTS) | Display the topic specified by the Contents option in the [OPTIONS] section of the .hpj file. |
|  | [HELP-CONTEXT](./HELP-CONTEXT) | Display the topic identified by the specified context identifier defined in the [MAP] section of the .hpj file. |
|  | [HELP-CONTEXTPOPUP](./HELP-CONTEXTPOPUP) | Display the topic identified by the specified context identifier defined in the [MAP] section of the .hpj file in a pop-up window. |
|  | [HELP-FINDER](./HELP-FINDER) | Display the Help Topics dialog box. |
|  | [HELP-HELPONHELP](./HELP-HELPONHELP) | Display help on how to use Windows Help, if the Winhlp32.hlp file is available. |
|  | [HELP-QUIT](./HELP-QUIT) | Inform Windows Help that it is no longer needed. If no other applications have asked for help, Windows closes Windows Help. |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* can be any signed numeric data item. The meaning depends on the opcode.

### Examples:

**Example -** Display the contents of a Windows Help file contained in the help.hlp file

```cobol
working-storage section.
copy "iscoblib.def".
77  path-help      pic x(255).
...

procedure division.
...
display-help.
   move "c:\myapp\mydocs\help.hlp" to path-help
   call "$winhelp" using path-help , help-contents.
```
