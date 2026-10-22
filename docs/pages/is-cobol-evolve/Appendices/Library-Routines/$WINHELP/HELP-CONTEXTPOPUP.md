### HELP-CONTEXTPOPUP

The HELP-CONTEXTPOPUP function displays the topic identified by the specified context identifier defined in the [MAP] section of the .hpj file in a popup window.

#### Syntax:

```cobol
 CALL "$WINHELP" USING helpFile
                       HELP-CONTEXTPOPUP
                       contextID
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| HELP-CONTEXTPOPUP | Constant |  |
| *helpFile* | PIC X(n) | Specifies the name of the help file to be opened. It can be either a .HLP or a .CHM file. The file name can be followed by an angle bracket (>) and the name of a secondary window if the topic is to be displayed in a secondary window rather than in the primary window. You must define the name of the secondary window in the [WINDOWS] section of the Help project (.hpj) file. |
| *contextID* | any numeric data item | Specifies the context identifier for the topic. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The $WINHELP library routine is not supported. |
| WPRTERR-BAD-ARG | The $WINHELP library routine has been called with bad parameters. |
