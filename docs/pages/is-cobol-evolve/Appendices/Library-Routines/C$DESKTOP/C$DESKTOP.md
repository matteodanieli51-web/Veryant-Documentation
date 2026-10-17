## C$DESKTOP

The C$DESKTOP library routine allows you to perform desktop operations like open/edit, print and mailto. It is useful to open or print a file with the associated application as well as to open the default email client with a pre-compiled email ready to be sent.

### Syntax:

```cobol
 CALL "C$DESKTOP" USING opCode
                        parameters
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [isgui.def](../../Copybooks/isgui.def), are: |  |
|  | [CDESKTOP-BROWSE](./CDESKTOP-BROWSE) | Browse for a resource |
|  | [CDESKTOP-EDIT](./CDESKTOP-EDIT) | Edit a file with the associated application |
|  | [CDESKTOP-MAIL](./CDESKTOP-MAIL) | Open the email client |
|  | [CDESKTOP-OPEN](./CDESKTOP-OPEN) | Open a file with the associated application |
|  | [CDESKTOP-PRINT](./CDESKTOP-PRINT) | Print a file with the associated application |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

**Example -** Print a PDF file using the associated application:

```cobol
call "c$desktop" using cdesktop-print "C:\Temp\print_001.pdf".
```
