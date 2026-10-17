### HELP-CONTENTS

The HELP-CONTENTS function displays the topic specified by the Contents option in the [OPTIONS] section of the .hpj file. This command is for backward compatibility. New applications should provide a .cnt file and use the HELP_FINDER command.

#### Syntax:

```cobol
 CALL "$WINHELP" USING helpFile
                       HELP-CONTENTS
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| HELP-CONTENTS | Constant |  |
| *helpFile* | PIC X(n) | Specifies the name of the help file to be opened. It can be either a .HLP or a .CHM file. The file name can be followed by an angle bracket (>) and the name of a secondary window if the topic is to be displayed in a secondary window rather than in the primary window. You must define the name of the secondary window in the [WINDOWS] section of the Help project (.hpj) file. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The $WINHELP library routine is not supported. |
| WPRTERR-BAD-ARG | The $WINHELP library routine has been called with bad parameters. |
