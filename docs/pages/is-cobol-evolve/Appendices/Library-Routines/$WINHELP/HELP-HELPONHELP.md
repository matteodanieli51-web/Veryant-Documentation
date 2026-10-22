### HELP-HELPONHELP

The HELP-HELPONHELP function displays help on how to use Windows Help, if the Winhlp32.hlp file is available.

#### Syntax:

```cobol
 CALL "$WINHELP" USING helpFile
                       HELP-HELPONHELP
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| HELP-HELPONHELP | Constant |  |
| *helpFile* | PIC X(n) | Specifies the name of the help file to be opened. It can be either a .HLP or a .CHM file. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The $WINHELP library routine is not supported. |
| WPRTERR-BAD-ARG | The $WINHELP library routine has been called with bad parameters. |
