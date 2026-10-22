### HELP-QUIT

The HELP-QUIT function informs Windows Help that it is no longer needed. If no other applications have asked for help, Windows closes Windows Help.

#### Syntax:

```cobol
 CALL "$WINHELP" USING helpFile
                       HELP-QUIT
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| HELP-QUIT | Constant |  |
| *helpFile* | PIC X(n) | Specifies the name of the help file to be opened. It can be either a .HLP or a .CHM file |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The $WINHELP library routine is not supported. |
| WPRTERR-BAD-ARG | The $WINHELP library routine has been called with bad parameters. |
