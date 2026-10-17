### WINPRINT-SET-FONT

The WINPRINT-SET-FONT function sets the font to be used by the subsequent [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statements.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-FONT
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SET-FONT | Constant |  |
| WINPRINT-DATA | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure:<br>*wprtdata-font*<br>Specifies the font handle to be used by the subsequent [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statements. It should be previously loaded with the [WFONT-GET-FONT](../W$FONT/WFONT-GET-FONT) or the [WFONT-GET-CLOSEST-FONT](../W$FONT/WFONT-GET-CLOSEST-FONT) function.<br>Do not destroy this handle before closing the print file. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |

#### Warning:

For fonts to work correctly, the -P PDF and -P PREVIEW "Save" feature require setting either the FONT_FOLDER or FONT_FOLDER_EMBED printer attributes using [WINPRINT-SET-ATTRIBUTE](./WINPRINT-SET-ATTRIBUTE/WINPRINT-SET-ATTRIBUTE) opcode. For example:

```cobol
call "win$printer" using winprint-set-attribute
                  "FONT_FOLDER_EMBED", "C:\WINDOWS\fonts"
```
